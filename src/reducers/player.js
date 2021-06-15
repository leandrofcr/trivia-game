import { GET_PLAYER_INFO, GET_QUESTIONS, GET_TOKEN } from '../action';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  token: '',
  score: 0,
  assertions: [],
  renderQuestions: false,
};

function player(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_TOKEN:
    return { ...state, token: payload.token };
  case GET_PLAYER_INFO:
    return { ...state, name: payload.name, gravatarEmail: payload.gravatarEmail };
  case GET_QUESTIONS:
    return { ...state, assertions: payload.results, renderQuestions: true };
  default:
    return state;
  }
}

export default player;
