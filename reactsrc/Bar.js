import React from 'react';
import $ from 'jquery';
import logo from './images/logo.png';

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

  handleSearchClick() {
    let searchKey = $("#searchBar").val();
    return;
  }
    
  render() {
    return (
      <div id="bar">
        <img src={logo} alt="logo" width="30" height="30" />
        <h3 id="title">moondow</h3>
        {this.state.logged ? (
          <div>
            <input id="searchBar" type="text" default="Search..." />
            <button id="searchButton" onClick={this.handleSearchClick.bind(this)}>search</button>
            <h4 id="name">{this.state.username}</h4>
            <img src={this.state.avatar} alt="avatar" width="100" height="100" />
          </div>
        ) : (
          <React.Fragment>
            <input id="searchBar" type="text" default="Search..." />
            <button id="searchButton" onClick={this.handleSearchClick.bind(this)}>search</button>
            <div id="loginButton" onClick={this.handleLoginClick.bind(this)}>
              Loginin
            </div>
          </React.Fragment>
        )}

      </div>
    )
  }
}

export default Bar;
