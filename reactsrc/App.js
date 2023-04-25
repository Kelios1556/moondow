import React from 'react';
import './stylesheets/App.css';
import './stylesheets/style.css';
import $ from 'jquery';
import logo from './images/logo.png';
import LoginPage from './account/LoginPage';
import MainPage from './mainPage/MainPage';
import Bar from './Bar';


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
        {this.state.logging ? (
          <LoginPage loginSuccess={this.loginSuccess.bind(this)} />
        ) : (
          <React.Fragment>
            <Bar 
              logged={this.state.logged} 
              name={this.state.username} 
              avatar={this.state.avatar}
              handleLoginClick={this.handleLoginClick.bind(this)}
            />
            <MainPage 
              logged={this.state.logged}
              username={this.state.username}  
            />
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default App;
