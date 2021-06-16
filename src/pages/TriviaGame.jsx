import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class TriviaGame extends Component {
  constructor() {
    super();
    this.state = {
      wasAnswered: false,
    };
  }

  showColoredBorders() {
    this.setState({ wasAnswered: true });
  }

  render() {
    const { assertions } = this.props;
    const { wasAnswered } = this.state;
    const correctAnswer = wasAnswered && 'correct-answer';
    const wrongAnswer = wasAnswered && 'wrong-answer';

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

          <button
            type="button"
            className={ correctAnswer }
            data-testid="correct-answer"
            onClick={ () => this.showColoredBorders() }
          >
            {assertions[0].correct_answer}
          </button>

          {assertions[0].incorrect_answers.map((elem, index) => (
            <button
              type="button"
              className={ wrongAnswer }
              key={ index }
              data-testid={ `wrong-answer-${index}` }
              onClick={ () => this.showColoredBorders() }
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
