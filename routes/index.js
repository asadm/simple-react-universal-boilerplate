
var router = {};

router.index = {
  path:"/",
  initialState:{
    title: "Index",
    data:{
      componentName: "index",
      items: [
        'documendt your code',
        'drop the kids off at the pool',
        '</script><script>alert(666)</script>'
      ],
      text: ''
    }
  },
  handler: function(initialState, req, res){
    res.render("Html", initialState);
  }
};

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
