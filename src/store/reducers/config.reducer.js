import { CONFIG_ACTIONS } from 'store/actions/config.actions';

const initialState = {
  amount: 10,
  category: '',
  difficulty: '',
  type: ''
};

export default function configState(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_ACTIONS.CONFIG_SET_NUMBER:
      return {
        ...state,
        amount: payload
      };
    case CONFIG_ACTIONS.CONFIG_SET_CATEGORY:
      return {
        ...state,
        category: payload
      };
    case CONFIG_ACTIONS.CONFIG_SET_DIFFICULTY:
      return {
        ...state,
        difficulty: payload
      };
    case CONFIG_ACTIONS.CONFIG_SET_TYPE:
      return {
        ...state,
        type: payload
      };
    default:
      return initialState
  }
}