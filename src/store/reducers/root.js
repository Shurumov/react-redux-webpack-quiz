import { combineReducers } from 'redux';
// reducers
import questionsState from './questions.reducer';
import resultsState from './results.reducer';
import configState from './config.reducer';

const appReducer = combineReducers({
    questionsState: questionsState,
    resultsState: resultsState,
    config: configState,
});

const rootReducer = (state, action) => {
    if (action.type === 'GLOBAL_CLEAR_STATE') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
