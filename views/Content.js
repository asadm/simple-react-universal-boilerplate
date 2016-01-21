var React = require('react');

var components = {
  index: require('./index'),
  hello: require('./hello')
}


var Content = React.createClass({

  render: function() {
    var data = this.props.data || this.props;
    var element = React.createElement(components[data.componentName], data);
    //var Component = components[data.componentName];
    //console.log("PROPS",this.props);
    return element;
  }
});

module.exports = Content;
