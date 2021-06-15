import { GET_TOKEN } from '../action';

const INITIAL_STATE = {
  gravatarEmail: '',
  name: '',
  token: 'padrao',
};

function player(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_TOKEN:
    return { ...state, token: payload.token };

  default:
    return state;
  }
}

export default player;
