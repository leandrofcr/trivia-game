import { GET_TOKEN } from '../action';

const INITIAL_STATE = {
  email: '',
  userName: '',
  token: 'padrao',
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_TOKEN:
    return { ...state, token: payload.token };

  default:
    return state;
  }
}

export default user;
