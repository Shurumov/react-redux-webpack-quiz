import { API_METHODS } from 'config/constants';

export const QUESTIONS_ACTION_TYPES = {
  QUESTIONS_SET_DATA_BY_KEY: 'QUESTIONS_SET_DATA_BY_KEY',
  QUESTIONS_CHANGE_PROCESSING: 'QUESTIONS_CHANGE_PROCESSING',
  QUESTIONS_CLEAR_STATE: 'QUESTIONS_CLEAR_STATE',
};

export function getQuestions(params) {
  return async (dispatch, getState, getAxios) => {
    const axios = getAxios();

    dispatch(changeProcessingState(true));

    const response = await axios.get(API_METHODS.QUESTIONS(params));
    dispatch(changeProcessingState(false));

    if (!response) {
      return response;
    }
    dispatch(setData(response.results, ));

    return response;
  };
}

export function changeProcessingState(newState) {
  return {
    type: QUESTIONS_ACTION_TYPES.QUESTIONS_CHANGE_PROCESSING,
    payload: { processing: newState },
  };
}

export function setData(data, stateKeyForDataSaving) {
  return {
    type: QUESTIONS_ACTION_TYPES.QUESTIONS_SET_DATA_BY_KEY,
    payload: {
      data
    },
  };
}

export function clearData() {
  return {
    type: QUESTIONS_ACTION_TYPES.QUESTIONS_CLEAR_STATE,
  };
}