import { RECEIVE_INFO } from "./../actions/map_actions";

const MapReducer = (state = {}, action) => {
    Object.freeze(state);
   
    switch (action.type) {
        case RECEIVE_INFO:
            return action.info;
        default:
            return state;
    }
};

export default MapReducer;