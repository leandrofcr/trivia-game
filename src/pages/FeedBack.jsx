import React, { Component } from 'react';
import Header from '../components/Header';

class FeedBack extends Component {
  constructor() {
    super();

    this.state = {
      questions: 3,
    };
  }

  render() {
    const { questions } = this.state;
    const magicNumber = 3;
    return (
      <section>
        <Header />
        <h1>HELLO MY FRIENDS!!!!</h1>
        {
          questions >= magicNumber
            ? <span data-testid="feedback-text">Mandou bem!</span>
            : <span data-testid="feedback-text">Podia ser melhor...</span>
        }
      </section>
    );
  }
}

export default FeedBack;
