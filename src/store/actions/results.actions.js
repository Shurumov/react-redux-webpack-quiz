export const RESULTS_ACTION_TYPES = {
  RESULTS_SET_DATA_BY_KEY: 'RESULTS_SET_DATA_BY_KEY',
  RESULTS_CLEAR_STATE: 'RESULTS_CLEAR_STATE',
};

export function setResults(results) {
  return {
    type: RESULTS_ACTION_TYPES.RESULTS_SET_DATA_BY_KEY,
    payload: results
  }
}