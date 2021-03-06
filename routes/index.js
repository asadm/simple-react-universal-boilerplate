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
    title: "Index Page",
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

//login route at /login
router.login = {
  path:"/login",
  initialState:{
    title:'Login Page',
    data:{
      componentName: "login"
    }
  },
  handler: function(initialState, req, res){
    res.render("Html", initialState);
  }
};

//register route at /register
router.register = {
  path:"/register",
  initialState:{
    title:'New Account',
    data:{
      componentName: "register"
    }
  },
  handler: function(initialState, req, res){
    res.render("Html", initialState);
  }
};

module.exports = router;
