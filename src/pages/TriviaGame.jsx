import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';

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
      <Header />
    );
  }
}

export default TriviaGame;
