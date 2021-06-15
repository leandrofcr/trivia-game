import React, { Component } from 'react';
import { Redirect } from 'react-router';

class TriviaGame extends Component {
  constructor() {
    super();
    this.state = {
      redirectSettings: false,
    };
  }

  render() {
    const { redirectSettings } = this.state;
    if (redirectSettings) {
      return <Redirect to="settings" />;
    }

    return (
      <div>
        <p>Welcome!</p>
      </div>
    );
  }
}

export default TriviaGame;
