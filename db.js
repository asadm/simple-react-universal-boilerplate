/*
This file holds all the interaction with database or our persistent storage.
These are quite simply our 'models'.
*/
var crypto = require('crypto');

var db = {};

var todoList = [
  'document your code',
  'drop the kids off at the pool',
  '</script><script>alert(666)</script>'
];

// dummy user
// asad:123
var users = [{
    username: 'asad',
    password:
     { salt: '3d2dd299',
       password: 'ad8089cdff5f7ad7002ed6cd21ce5970a86de91de3e90c00702ebcdbf09426fa' },
    email: 'asad@domain.com'
  }
];

// This function will fetch all todos
db.getAllTodos = function(cb) {
  cb(todoList);
}

// This function will fetch all todos
db.addTodo = function(item,cb) {
  todoList.push(item);
  cb();
}

// This function will check user login
db.checkLogin = function(user,pass,cb) {

  for (var i in users){
    // username found?
    if (user===users[i].username){
      // Now check password, first salt the query password and try to match with saved saltedpass
      var querypass = hash(pass, users[i].password.salt);

      if (querypass===users[i].password.password){
        cb(false,users[i]); //callback with user object.
      }
      else{
        cb(false,false); //auth failed
      }

      return; //quit searching regardless
    }
  }

  cb(false,false); //didn't find username. auth failed.
}

db.getUserById = function(userid,cb){
  for (var i in users){
    if (userid == users[i].username)
      return cb(false,users[i]);
  }
  return (true); //no user found

}

db.addUser = function(userdata,cb){
  function validateEmail(email) {
      email = (email || "").trim();
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email) && email.indexOf("+")<0) return email.toLowerCase();
      else return false;
  }
  //if all fields exist and email is valid
  if (!userdata.username || !userdata.password || !validateEmail(userdata.email))
    return cb("missing or invalid fields.");
  //see if already exists
  for (var i in users){
    if (userdata.username===users[i].username)
      return cb("already exists.");
  }

  //looks good, save the data...but wait!

  //let's not save password in plain text. Let's salt the password and save both salt and saltedpassword.
  var salt = newSalt(4);
  var saltedpass = hash(userdata.password, salt);
  userdata.password = {salt:salt,password:saltedpass};
  users.push(userdata);
  cb();
}


function newSalt(size) {
    //return "staticsalt";
    return crypto.randomBytes(size).toString('hex');
}
function hash(password, salt) {
    var sha256 = crypto.createHash('sha256').update(salt + password).digest("hex");
    return sha256;
}

module.exports = db;
