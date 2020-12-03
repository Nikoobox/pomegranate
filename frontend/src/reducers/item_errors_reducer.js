import {
    RECEIVE_ITEM_ERRORS,
    RECEIVE_ITEM,
} from '../actions/item_actions';

const _nullErrors = [];

const ItemErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM_ERRORS:
            return action.errors;
        case RECEIVE_ITEM:
            return _nullErrors;
        default:
            return state;
    }
};
export default ItemErrorsReducer;