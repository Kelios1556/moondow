import React from 'react';
import $ from 'jquery';
import '../stylesheets/LoginPage.css';

class SignPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleNameDef = this.handleNameDef.bind(this);
  }

  handleSignReq() {
    this.props.handleSignReq();
  }

  handlePhoneNumberVerify() {
    return;
  }

  handleNameDef(event) {
    //verify whether the name is occupied
  }

  render() {
    return (
      <React.Fragment>
        <div>
          phone number: <input type="text" id="phoneNumber" size="30" />
          <button onClick={this.handlePhoneNumberVerify.bind(this)}>verify your phone number</button>
        </div>
        <form id="signPage" onSubmit={this.handleSignReq}>
          Username: <input type="text" id="username" size="30" onBlur={this.handleNameDef} /><br />
          Password: <input type="password" id="password" /><br />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signing: false
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

  handleSignReq() {
    let username = $("#username").val();
    let pwd = $("#password").val();
    $.post("http://localhost:3001/users/sign", 
      {username: username,
       password: pwd
      },
      function(res) {
        this.loginSuccess();
      }.bind(this));
  }

  handleSigninClick() {
    this.setState({
      signing: true
    })
  }

  loginSuccess() {
    this.props.loginSuccess();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.signing ? (
          <SignPage />
        ) : (
          <React.Fragment>
            <form id="logginPage" onSubmit={this.handleLoginReq.bind(this)}>
              Username: <input type="text" id="username" size="30" /><br />
              Password: <input type="password" id="password" /><span>Forget Password?</span><br />
              <input type="submit" value="Submit" />
            </form>
            <div id="signIn" onClick={this.handleSigninClick.bind(this)}>do not have an account yet? Sign in</div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default LoginPage;
