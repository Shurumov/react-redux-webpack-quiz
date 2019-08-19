import {RESULTS_ACTION_TYPES} from "./results.actions";

export const CONFIG_ACTIONS = {
  CONFIG_SET_NUMBER: 'CONFIG_SET_NUMBER',
  CONFIG_SET_CATEGORY: 'CONFIG_SET_CATEGORY',
  CONFIG_SET_DIFFICULTY: 'CONFIG_SET_DIFFICULTY',
  CONFIG_SET_TYPE: 'CONFIG_SET_TYPE',
};

export function setConfigParam(type, payload) {
  return {
    type: type,
    payload: payload
  }
}