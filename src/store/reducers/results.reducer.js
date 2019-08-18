import { RESULTS_ACTION_TYPES } from 'store/actions/results.actions';

const initialState = [];

export default function resultsState(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case RESULTS_ACTION_TYPES.RESULTS_SET_DATA_BY_KEY:
      return payload;
    case RESULTS_ACTION_TYPES.RESULTS_CLEAR_STATE:
    default:
      return initialState
  }
}