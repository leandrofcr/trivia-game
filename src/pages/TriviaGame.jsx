import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class TriviaGame extends Component {
  render() {
    const { assertions } = this.props;
    return (
      <>
        <Header />

        <section>
          <p data-testid="question-category">
            {assertions[0].category}
          </p>
          <p data-testid="question-text">
            {assertions[0].question}
          </p>

          <p data-testid="correct-answer">
            {assertions[0].correct_answer}
          </p>

          {assertions[0].incorrect_answers.map((elem, index) => (
            <p key={ index } data-testid={ `wrong-answer-${index}` }>{elem}</p>
          ))}

        </section>

      </>

    );
  }
}
const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  renderQuestions: state.player.renderQuestions,
});

TriviaGame.propTypes = {
  getAssertions: PropTypes.func,
  assertions: PropTypes.arryOf,
}.isRequired;

export default connect(mapStateToProps)(TriviaGame);
