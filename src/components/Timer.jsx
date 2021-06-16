import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ONE_SECONDS = 1000;

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30,
    };
    this.starTimer = this.starTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    this.starTimer();
  }

  starTimer() {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, ONE_SECONDS);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.setState({ seconds: '--' });
  }

  render() {
    const { disableButtons } = this.props;
    const { seconds } = this.state;
    if (seconds < 1) {
      this.stopTimer();
      disableButtons();
    }

    return (
      <p>
        Tempo:
        {' '}
        {seconds}
        s
      </p>
    );
  }
}

Timer.propTypes = {
  disableButtons: PropTypes.boolean,
}.isRequired;

export default Timer;
