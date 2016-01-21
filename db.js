/*
This file holds all the interaction with database or our persistent storage.
These are quite simply our 'models'.
*/

var db = {};

var todoList = [
  'documendt your code',
  'drop the kids off at the pool',
  '</script><script>alert(666)</script>'
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

module.exports = db;
