import { GET_PLAYER_INFO, GET_TOKEN } from '../action';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  token: 'padrao',
  score: 0,
};

function player(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_TOKEN:
    return { ...state, token: payload.token };
  case GET_PLAYER_INFO:
    return { ...state, name: payload.name, gravatarEmail: payload.gravatarEmail };
  default:
    return state;
  }
}

export default player;
