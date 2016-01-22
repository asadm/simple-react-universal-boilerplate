/*
This is a basic Todo List. It does two things:
- Renders the list it receives in props.items.
- Sends POST to our api when new item is added.
*/

var React = require('react');
var request = require('superagent');

var TodoList = React.createClass({
  render: function() {
    var i = 0;
    var createItem = function(itemText) {
      return <li key={i++}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return this.props;
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';

    request
    .post('/api/add')
    .send({item:this.state.text})
    .set('Accept', 'application/json')
    .end(function(err, res){
      console.log(err,res);
      this.setState({items: nextItems, text: nextText});
    }.bind(this));


    //console.log("added");
  },
  render: function() {
    return (

      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Todo
              </a>
            </div>
            {
              (this.props.userData)?
                (<p className="navbar-text pull-right">{this.props.userData.username} | <a href="api/logout" className="navbar-link">Logout</a></p>)
              :
                (<p className="navbar-text pull-right"><a href="/login" className="navbar-link">Login</a> | <a href="/register" className="navbar-link">Register</a></p>)

            }
          </div>
        </nav>
        <h3>Hello {(this.props.userData)?this.props.userData.username:""}</h3>
        <TodoList items={this.state.items} />
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Write task" onChange={this.onChange} value={this.state.text} />
            &nbsp;
          </div>
          <button className="btn btn-primary">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoApp;
