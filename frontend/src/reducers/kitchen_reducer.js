import { RECEIVE_KITCHEN, RECEIVE_USER_KITCHENS } from './../actions/kitchen_actions';

const KitchenReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_KITCHEN:
            return {...state, [action.kitchen.data._id]: action.kitchen.data };
        case RECEIVE_USER_KITCHENS:
            return action.kitchens.data;
        default:
            return state;
    }
}

export default KitchenReducer;