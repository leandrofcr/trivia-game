import { fetchToken } from '../services/API';

export const GET_TOKEN = 'GET_TOKEN';
export const GET_GRAVATAR = 'GET_GRAVATAR';
export const GET_PLAYER_INFO = 'GET_PLAYER_INFO';

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const getGravatar = (payload) => ({
  type: GET_GRAVATAR,
  payload,
});

export const getPLayerInfo = (payload) => ({
  type: GET_PLAYER_INFO,
  payload,
});

export const getTokenAPI = () => async (dispatch) => {
  const response = await fetchToken();
  localStorage.setItem('token', response.token);

  return dispatch(getToken(response));
};
