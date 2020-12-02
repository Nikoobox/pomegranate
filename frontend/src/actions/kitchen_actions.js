import * as KitchenAPIUtil from './../util/kitchen_api_util';

export const RECEIVE_KITCHEN = "RECEIVE_KITCHEN";

const receiveKitchen = kitchen => {
    return {
        type: RECEIVE_KITCHEN,
        kitchen
    };
}

export const createKitchen = kitchenData => dispatch => {
    return KitchenAPIUtil.postKitchen(kitchenData)
        .then(kitchen => {
            return dispatch(receiveKitchen(kitchen))
        });
}

export const getKitchen = kitchenId => dispatch => {
    return KitchenAPIUtil.getKitchen(kitchenId)
        .then(kitchen => {
            return dispatch(receiveKitchen(kitchen))
        });
}