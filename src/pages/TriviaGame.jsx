import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestionsAPI } from '../action';
import Header from '../components/Header';

class TriviaGame extends Component {
  constructor() {
    super();
    this.state = {
      assertions: {},
    };
  }

  render() {
    const { assertions, renderQuestions } = this.props;
    console.log(assertions[0]);
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
        </section>

      </>

    );
  }
}
const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  renderQuestions: state.player.renderQuestions,
});

const mapDispatchToProps = (dispatch) => ({
  getAssertions: () => dispatch(getQuestionsAPI()),
});

TriviaGame.propTypes = {
  getAssertions: PropTypes.func,
  assertions: PropTypes.arryOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TriviaGame);
