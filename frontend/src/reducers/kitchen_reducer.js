import { RECEIVE_KITCHEN } from './../actions/kitchen_actions';

const KitchenReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_KITCHEN:
            debugger;
            return {...state, [action.kitchen.data._id]: action.kitchen.data };
        default:
            return state;
    }
}

export default KitchenReducer;