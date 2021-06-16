import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Timer from '../components/Timer';
import { updateAssertions, updateScore } from '../action';

const FOUR = 4;
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
      questionIndex: 0,
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
    const getStorage = JSON.parse(localStorage.getItem('state'));
    const amountScore = getStorage.player.score;

    const currScore = amountScore + TEN + (secs * difficultyScore[diff]);
    const playerData = {
      player: {
        score: currScore,
      },
    };
    localStorage.setItem('state', JSON.stringify(playerData));
    uptadePlayerScore(currScore);
  }

  renderBtnCorrectAnswer() {
    const { questions, timeLeft, updatePlayerAssertions } = this.props;
    const { isDisable, wasAnswered, questionIndex } = this.state;
    const correctAnswer = wasAnswered && 'correct-answer';

    return (
      <button
        type="button"
        className={ correctAnswer }
        data-testid="correct-answer"
        disabled={ isDisable }
        onClick={ () => {
          this.showColoredBorders();
          this.sumScore(timeLeft, questions[questionIndex].difficulty);
          updatePlayerAssertions(questions[questionIndex].question);
        } }
      >
        {questions[questionIndex].correct_answer}
      </button>);
  }

  renderBtnWrongAnswer() {
    const { questions } = this.props;
    const { isDisable, wasAnswered, questionIndex } = this.state;
    const wrongAnswer = wasAnswered && 'wrong-answer';

    return questions[questionIndex].incorrect_answers.map((elem, index) => (
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
    ));
  }

  render() {
    const { questions } = this.props;
    const { wasAnswered, questionIndex } = this.state;
    if (questionIndex > FOUR) {
      return <Redirect to="/feedback" />;
    }

    return (
      <>
        <Header />
        <section>
          <p data-testid="question-category">
            {questions[questionIndex].category}
          </p>
          <p data-testid="question-text">
            {questions[questionIndex].question}
          </p>

          {this.renderBtnCorrectAnswer()}

          {this.renderBtnWrongAnswer()}
        </section>
        {!wasAnswered && <Timer
          disableButtons={ this.disableButtons }
          wasAnswered={ wasAnswered }
        />}
        {wasAnswered && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ () => this.setState((prevState) => ({
              questionIndex: prevState.questionIndex + 1,
              wasAnswered: false,
            })) }
          >
            Próxima
          </button>)}

      </>
    );
  }
}
const mapStateToProps = (state) => ({
  questions: state.player.questions,
  renderQuestions: state.player.renderQuestions,
  timeLeft: state.player.timeLeft,
});

const mapDispatchToProps = (dispatch) => ({
  uptadePlayerScore: (value) => dispatch(updateScore(value)),
  updatePlayerAssertions: (question) => dispatch(updateAssertions(question)),
});

TriviaGame.propTypes = {
  getAssertions: PropTypes.func,
  uptadePlayerScore: PropTypes.func,
  assertions: PropTypes.arryOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TriviaGame);
