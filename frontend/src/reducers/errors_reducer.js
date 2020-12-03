import { combineReducers } from 'redux';
import KitchenErrorsReducer from './kitchen_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import ItemErrorsReducer from './item_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    item: ItemErrorsReducer,
    kitchen: KitchenErrorsReducer
})
