/*
This is the most basic react component.
Hosted at /hello as an example for a second route.
*/

var React = require('react');

var HelloMessage = React.createClass({
  render: function() {

    return (
      <div>Hello2 {this.props.name}</div>
    );
  }
});

module.exports = HelloMessage;
