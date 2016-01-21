var express = require('express');
var reactViews = require('express-react-views');
var routes = require('./routes');

var app = express();

app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use(express.static(__dirname + '/public'));

//configure routes to their handlers
for (var i in routes){
  console.log("route %s configured",routes[i].path);
  (function(i){
    app.get(routes[i].path,function(req, res){
      routes[i].handler(routes[i].initialState,req,res);
    });
  })(i)

}
//app.get('/', require('./routes').index);
//app.get('/hello', require('./routes').hello);


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Dynamic react example listening on port ' + port);
});
