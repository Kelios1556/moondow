import React from 'react';
import logo from './logo.png';
import './App.css';
import './style.css';
import $ from 'jquery';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: props.logged,
      username: props.name,
      avatar: props.avatar
    };
  }

  handleLoginClick() {
    this.props.handleLoginClick();
  }
    
  render() {
    return (
      <div id="bar">
        <img src={logo} alt="logo" width="30" height="30" />
        <h3>moondow</h3>
        {this.state.logged ? (
          <div>
            <h4 id="name">{this.state.username}</h4>
            <img src={this.state.avatar} alt="avatar" width="100" height="100" />
          </div>
        ) : (
          <div id="loginButton" onClick={this.handleLoginClick.bind(this)}>
            Loginin
          </div>
        )}

      </div>
    )
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleLoginReq() {
    let username = $("#username").val();
    let pwd = $("#password").val();
    $.post("http://localhost:3001/users/login", 
      {username: username,
       password: pwd
      },
      function(res) {
        this.loginSuccess();
      }.bind(this));
  }

  loginSuccess() {
    this.props.loginSuccess();
  }

  render() {
    return (
      <form id="logginPage" onSubmit={this.handleLoginReq}>
        Username: <input type="text" id="username" size="30" /><br />
        Password: <input type="password" id="password" /><br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class MainPage extends React.Component {
  render() {
    return (
      <div>
      aaaaaaa
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      username: '',
      avatar: '',
      logging: false
    };
  }

  handleLoginClick() {
    this.setState({
      logging: true
    })
  }

  loginSuccess() {
    this.setState({
      logged: true,
      logging: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <Bar 
          logged={this.state.logged} 
          name={this.state.username} 
          avatar={this.state.avatar}
          handleLoginClick={this.handleLoginClick.bind(this)}
        />
        {this.state.logging ? (
          <LoginPage loginSuccess={this.loginSuccess.bind(this)} />
        ) : (
          <MainPage />
        )}
      </React.Fragment>
    )
  }
}

export default App;
