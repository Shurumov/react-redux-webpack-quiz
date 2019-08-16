import { QUESTIONS_ACTION_TYPES } from 'store/actions/questions.actions';

const initialState = {
  questions: {},
  processing: false,
};

export default function questionsState(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case QUESTIONS_ACTION_TYPES.QUESTIONS_SET_DATA_BY_KEY:
      return { ...state, questions: payload };

    case QUESTIONS_ACTION_TYPES.QUESTIONS_CHANGE_PROCESSING:
      return {
        ...state,
        processing: payload.processing
      };

    case QUESTIONS_ACTION_TYPES.QUESTIONS_CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};