exports.index = function(req, res){
  var initialState = {
    componentName: "index",
    items: [
      'documendt your code',
      'drop the kids off at the pool',
      '</script><script>alert(666)</script>'
    ],
    text: '',
  };
  res.render("Html", { data: initialState });
};

exports.hello = function(req, res){
  var initialState = {
    componentName: "hello",
    name:'asad',
    title:'HELLO'
  };
  res.render('Html', { data: initialState });
};
