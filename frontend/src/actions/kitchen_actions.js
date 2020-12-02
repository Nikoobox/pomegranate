import * as KitchenAPIUtil from './../util/kitchen_api_util';

export const RECEIVE_KITCHEN = "RECEIVE_KITCHEN";
export const RECEIVE_USER_KITCHENS = "RECEIVE_USER_KITCHENS"

const receiveKitchen = kitchen => {
    return {
        type: RECEIVE_KITCHEN,
        kitchen
    };
}

const receiveUserKitchens = kitchens => {
    return {
        type: RECEIVE_USER_KITCHENS,
        kitchens
    };
}

export const fetchUserKitchens = userId => dispatch => {
    return KitchenAPIUtil.getKitchens(userId)
        .then(kitchens => {
            return dispatch(receiveUserKitchens(kitchens))
        });
}

export const createKitchen = kitchenData => dispatch => {
    return KitchenAPIUtil.postKitchen(kitchenData)
        .then(kitchen => {
            return dispatch(receiveKitchen(kitchen))
        });
}