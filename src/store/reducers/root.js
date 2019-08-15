import { combineReducers } from 'redux';
// reducers
import {questionsState} from './questions.reducer';


const appReducer = combineReducers({
    questionsState: questionsState,
});

const rootReducer = (state, action) => {
    if (action.type === 'GLOBAL_CLEAR_STATE') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
