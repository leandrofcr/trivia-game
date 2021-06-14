import React, { Component } from 'react';

class TriviaGame extends Component {
  render() {
    const userToken = localStorage.getItem('token');
    return (
      <div>
        <p>{userToken}</p>
      </div>
    );
  }
}

export default TriviaGame;
