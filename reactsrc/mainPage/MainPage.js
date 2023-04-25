import React from 'react';
import $ from 'jquery';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: props.logged,
      username: props.username,
    }
  }

  componentDidMount() {
    // to request data for recommend
  }

  handleFollowingLoading() {
  }

  handleTargetRecomdLoading() {
    // request recommend data for a specific user
  }

  handleRecomdLoading() {
  }

  render() {
    return (
      <React.Fragment>
        {this.state.logging ? (
          <React.Fragment>
            <div id="followedBar" onClick={this.handleFollowingLoading.bind(this)}>
              followed  
            </div>
            <div id="recomdBar" onClick={this.handleTargetRecomdLoading.bind(this)}>
              recommend
            </div>
          </React.Fragment>
        ) : (
          <div id="recomdBar" onClick={this.handleRecomdLoading.bind(this)}>
            recommend
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default MainPage;
