import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class FeedBack extends Component {
  render() {
    const { score, assertions } = this.props;

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
        <span data-testid="feedback-total-question">
          {`Você acertou ${assertions.length} questões!`}
        </span>
        <span data-testid="feedback-total-score">
          {`Um total de ${score} pontos`}
        </span>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

FeedBack.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(FeedBack);
