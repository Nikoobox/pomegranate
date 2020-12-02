import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from "./../actions/item_actions";

const ItemReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            debugger;
            return { ...state, banana: action.item};
        case REMOVE_ITEM:
            let newState = Object.assign({}, state);
            delete newState[action.item.id]
            return newState
        default:
            return state;
    }
};

export default ItemReducer;
