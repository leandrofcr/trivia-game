import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class FeedBack extends Component {
  render() {
    const { score } = this.props;

    const magicNumber = 3;
    return (
      <section>
        <Header />
        <h1>HELLO MY FRIENDS!!!!</h1>
        {
          score >= magicNumber
            ? <span data-testid="feedback-text">Mandou bem!</span>
            : <span data-testid="feedback-text">Podia ser melhor...</span>
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
});

FeedBack.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(FeedBack);
