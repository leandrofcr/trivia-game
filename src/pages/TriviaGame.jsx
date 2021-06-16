import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Timer from '../components/Timer';
import { updateScore } from '../action';

const TEN = 10;
const difficultyScore = {
  hard: 3,
  medium: 2,
  easy: 1,
};

class TriviaGame extends Component {
  constructor() {
    super();
    this.state = {
      wasAnswered: false,
      isDisable: false,
    };
    this.showColoredBorders = this.showColoredBorders.bind(this);
    this.disableButtons = this.disableButtons.bind(this);
    this.sumScore = this.sumScore.bind(this);
  }

  showColoredBorders() {
    this.setState({ wasAnswered: true });
  }

  disableButtons() {
    this.setState({ isDisable: true });
  }

  sumScore(secs, diff) {
    const { uptadePlayerScore } = this.props;
    const currData = JSON.parse(localStorage.getItem('state'));
    const amountScore = currData.player.score;

    const currScore = amountScore + TEN + (secs * difficultyScore[diff]);
    const playerData = {
      player: {
        score: currScore,
      },
    };
    localStorage.setItem('state', JSON.stringify(playerData));
    uptadePlayerScore(currScore);
  }

  render() {
    const { assertions, timeLeft } = this.props;
    const { wasAnswered, isDisable } = this.state;
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
            disabled={ isDisable }
            onClick={ () => {
              this.showColoredBorders();
              this.sumScore(timeLeft, assertions[0].difficulty);
            } }
          >
            {assertions[0].correct_answer}
          </button>

          {assertions[0].incorrect_answers.map((elem, index) => (
            <button
              type="button"
              className={ wrongAnswer }
              key={ index }
              disabled={ isDisable }
              data-testid={ `wrong-answer-${index}` }
              onClick={ () => this.showColoredBorders() }
            >
              {elem}
            </button>
          ))}

        </section>
        <Timer disableButtons={ this.disableButtons } />

      </>

    );
  }
}
const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  renderQuestions: state.player.renderQuestions,
  timeLeft: state.player.timeLeft,
});

const mapDispatchToProps = (dispatch) => ({
  uptadePlayerScore: (value) => dispatch(updateScore(value)),
});

TriviaGame.propTypes = {
  getAssertions: PropTypes.func,
  uptadePlayerScore: PropTypes.func,
  assertions: PropTypes.arryOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TriviaGame);
