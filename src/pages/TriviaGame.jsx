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

          <button type="button" data-testid="correct-answer">
            {assertions[0].correct_answer}
          </button>

          {assertions[0].incorrect_answers.map((elem, index) => (
            <button
              type="button"
              key={ index }
              data-testid={ `wrong-answer-${index}` }
            >
              {elem}
            </button>
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
