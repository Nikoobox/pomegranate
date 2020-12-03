import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import items from './item_reducer';

const RootReducer = combineReducers({
    items,
    session,
    errors
});

export default RootReducer;