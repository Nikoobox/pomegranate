import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import items from './item_reducer';
import recipes from './recipe_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    items,
    session,
    recipes,
    errors,
    ui,
});

export default RootReducer;