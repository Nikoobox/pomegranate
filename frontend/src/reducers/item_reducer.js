import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from "./../actions/item_actions";

const ItemReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ITEMS:
            // debugger;
            let items = {}
            action.items.data.map(item => {
                return items = Object.assign(newState, { [item._id]: item } )
            })
            return items;
        case RECEIVE_ITEM:
            // debugger;
            return { ...state, [action.item.data._id]: action.item.data };
        case REMOVE_ITEM:
            // debugger;
            delete newState[action.id]
            return newState
        default:
            return state;
    }
};

export default ItemReducer;
