import { combineReducers } from 'redux';

import session from './session_errors_reducer';

const errorReducer = combineReducers({
    session: session
});


export default errorReducer;