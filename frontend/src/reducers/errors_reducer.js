import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
<<<<<<< HEAD
import ItemErrorsReducer from './item_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    item: ItemErrorsReducer
=======
import KitchenErrorsReducer from './kitchen_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    kitchen: KitchenErrorsReducer
>>>>>>> master
});