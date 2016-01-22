/*
This file set's up api endpoints. Preferably at /api/* path.
These api endpoints can be used by our client-sided react app
to send form data or request new data.
*/
var db = require('./db');
var bodyParser = require('body-parser');


module.exports = function(app,express){
  console.log("setting up API endpoints");

  app.use(bodyParser.json());

  app.post("/api/add",function(req, res){
    var query = req.body;
    console.log("adding item: ",query);
    db.addTodo(query.item,function(){

      res.send({msg:"success"});
    })

  });


}
