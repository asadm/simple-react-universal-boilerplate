/*
This file set's up api endpoints. Preferably at /api/* path.
These api endpoints can be used by our client-sided react app
to send form data or request new data.
*/
var db = require('./db');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session')



//authentication
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//login logic
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("LocalStrategy");
    db.checkLogin(username, password, function(err, user) {
      console.log("checkLogin",err,user);
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      return done(null, user);
    });
  }
));

//userdata is serialized to it's username only in the cookie to reduce cookie size.
passport.serializeUser(function(user, done) {
  done(null, user.username);
});

//userid is deserialized from cookie to it's data
passport.deserializeUser(function(id, done) {
  db.getUserById(id, function(err, user) {
    done(err, user);
  });
});


module.exports = function(app,express){
  console.log("setting up API endpoints");

  app.use(session({
    genid: function(req) {
      return genuuid() // use UUIDs for session IDs
    },
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }))
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());

  app.post("/api/add",function(req, res){
    var query = req.body;
    console.log("adding item: ",query);
    db.addTodo(query.item,function(){

      res.send({msg:"success"});
    })

  });

  //just echo's all the userdata we have against this user's session
  app.get("/sessionTest",function(req,res){
    res.send(req.user);
  });


  //login api, uses the LocalStrategy defined at the top to auth the user
  app.post('/api/login',
    passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login#?error=true' })
  );


  //new user registers using this api call
  app.post("/api/register",function(req, res){
    var query = req.body;

    db.addUser(query,function(err){
      if (err)
        res.redirect("/register#?error=true");
      else {
        res.redirect("/login#?registered=true");
      }
    });
  });

  app.get('/api/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

}



//generates a random uuid.
function genuuid() {
  var crypto = require('crypto');
  function uuidFromBytes(rnd) {
    rnd[6] = (rnd[6] & 0x0f) | 0x40;
    rnd[8] = (rnd[8] & 0x3f) | 0x80;
    rnd = rnd.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
    rnd.shift();
    return rnd.join('-');
  }

  return uuidFromBytes(crypto.randomBytes(16));
}
