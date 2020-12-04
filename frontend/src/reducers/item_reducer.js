import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from "./../actions/item_actions";

const ItemReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ITEMS:
            let items = {}
            action.items.data.map(item => {
                return items = Object.assign(newState, { [item._id]: item } )
            })
            return items;
        case RECEIVE_ITEM:
            return { ...state, [action.item.data._id]: action.item.data };
        case REMOVE_ITEM:
            delete newState[action.id]
            return newState;
        case CLEAR_ITEMS:
            return {};
        default:
            return state;
    }
};

export default ItemReducer;
