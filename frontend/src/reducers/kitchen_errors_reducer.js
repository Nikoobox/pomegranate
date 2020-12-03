import {
    RECEIVE_KITCHEN_ERRORS,
    RECEIVE_KITCHEN,
} from '../actions/kitchen_actions';

const _nullErrors = [];

const KitchenErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_KITCHEN_ERRORS:
            return action.errors;
        case RECEIVE_KITCHEN:
            return _nullErrors;
        default:
            return state;
    }
};

export default KitchenErrorsReducer;