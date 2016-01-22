/*
This is the login react component.
Hosted at /login
*/

var React = require('react');
var request = require('superagent');

var Login = React.createClass({
  render: function() {

    return (
      <div className="loginmodal-container">
				<h1>Login to Your Account</h1><br/>
			  <form action="/api/login" method="post">
  				<input type="text" name="username" placeholder="Username" />
  				<input type="password" name="password" placeholder="Password"/>
  				<input type="submit" className="login loginmodal-submit" value="Login" />
			  </form>

			  <div className="login-help">
			    <a href="/register">Register</a> - <a href="#">Forgot Password</a>
			  </div>
			</div>
    );
  }
});

module.exports = Login;
