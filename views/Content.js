var React = require('react');

//all main components need to be listed here for browserify to work
var components = {
  index: require('./components/index'),
  login: require('./components/login'),
  register: require('./components/register')
}



var Content = React.createClass({

  render: function() {
    var data = this.props.data || this.props;
    var element = React.createElement(components[data.componentName], data);

    return element;
  }
});

module.exports = Content;
