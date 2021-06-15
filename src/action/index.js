import { fetchToken, fetchQuestions } from '../services/API';

export const GET_TOKEN = 'GET_TOKEN';
export const GET_GRAVATAR = 'GET_GRAVATAR';
export const GET_PLAYER_INFO = 'GET_PLAYER_INFO';
export const GET_QUESTIONS = 'GET_QUESTIONS';

const NUM_OF_QUESTIONS = 5;

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const getPLayerInfo = (payload) => ({
  type: GET_PLAYER_INFO,
  payload,
});

export const getQuetions = (payload) => ({
  type: GET_QUESTIONS,
  payload,
});

export const getTokenAPI = () => async (dispatch) => {
  const response = await fetchToken();
  localStorage.setItem('token', response.token);

  return dispatch(getToken(response));
};

export const getQuestionsAPI = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetchQuestions(NUM_OF_QUESTIONS, token);

  return dispatch(getQuetions(response));
};
