/*
This is the main entry point for node app. This file does:
- Set's up http/express server
- Uses object from routes/index.js to map all the paths to their root react components.
*/
var express = require('express');
var reactViews = require('express-react-views');

var app = express();
var port = process.env.PORT || 3000;

var routes = require('./routes');

//setup our APIs
require('./api')(app);

app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use(express.static(__dirname + '/public'));


//configure routes to their handlers
for (var i in routes){

  (function(i){
    app.get(routes[i].path,function(req, res){

      //cloning can be improved. This works for now.
      var stateClone = JSON.parse(JSON.stringify(routes[i].initialState));
      routes[i].handler(stateClone,req,res);
    });
    console.log("route %s configured",routes[i].path);
  })(i)

}




app.listen(port, function () {
  console.log('server listening on port ' + port);
});
