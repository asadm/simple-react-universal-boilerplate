/*
This is the account registration react component.
Hosted at /register
*/

var React = require('react');

var Register = React.createClass({
  render: function() {

    return (
      <div className="loginmodal-container">
				<h1>Create Account</h1><br/>
			  <form action="/api/register" method="post">
				<input type="text" name="username" placeholder="Username" />
				<input type="password" name="password" placeholder="Password" />
        <input type="text" name="email" placeholder="Email" />
				<input type="submit" className="login loginmodal-submit" value="Register" />
			  </form>

			  <div className="login-help">
				    <a href="/login">Login</a>
			  </div>
			</div>
    );
  }
});

module.exports = Register;
