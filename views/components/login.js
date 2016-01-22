/*
This is the login react component.
Hosted at /login
*/

var React = require('react');
var request = require('superagent');

var Login = React.createClass({
  render: function() {

    return (
      <div className="login-container">
        <div className="loginmodal-container">
  				<h1>Login to Your Account</h1><br/>
  			  <form action="/api/login" method="post">
    				<input type="text" name="username" placeholder="Username" />
    				<input type="password" name="password" placeholder="Password"/>
    				<input type="submit" className="login loginmodal-submit" value="Login" />
  			  </form>

  			  <div className="login-help">
  			    <a className="pull-right" href="#">Forgot Password</a>
  			  </div>
  			</div>
        <div className="alternate-container">
          <a href="/register">Create account</a>
        </div>
      </div>
    );
  }
});

module.exports = Login;
