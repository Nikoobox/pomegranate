import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import kitchen from './kitchen_reducer';

const RootReducer = combineReducers({
    kitchen,
    session,
    errors
});

export default RootReducer;