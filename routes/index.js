/*

This file holds all the view routes for our app and loads corresponding react component
when that route is called by user.

*/

var db = require("../db.js");

var router = {};

//The homepage
router.index = {
  path:"/",
  initialState:{
    title: "Index",
    data:{
      componentName: "index",
      items: [],
      text: ''
    }
  },
  handler: function(initialState, req, res){
    db.getAllTodos(function(list){
      initialState.data.items = list;
      res.render("Html", initialState);
    });
  }
};

//example second route at /hello
router.hello = {
  path:"/hello",
  initialState:{
    title:'HELLO',
    data:{
      componentName: "hello",
      name:'asad'
    }
  },
  handler: function(initialState, req, res){
    res.render("Html", initialState);
  }
};

module.exports = router;
