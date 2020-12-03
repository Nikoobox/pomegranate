import * as KitchenAPIUtil from './../util/kitchen_api_util';

export const RECEIVE_KITCHEN = "RECEIVE_KITCHEN";
export const RECEIVE_USER_KITCHENS = "RECEIVE_USER_KITCHENS"
export const RECEIVE_KITCHEN_ERRORS = "RECEIVE_KITCHEN_ERRORS";


const receiveKitchen = kitchen => {
    return {
        type: RECEIVE_KITCHEN,
        kitchen
    };
}
export const receiveKitchenErrors = errors => ({
    type: RECEIVE_KITCHEN_ERRORS,
    errors
});

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

export const getKitchen = kitchenId => dispatch => {
    return KitchenAPIUtil.getKitchen(kitchenId)
        .then(kitchen => {
            return dispatch(receiveKitchen(kitchen))
        }, err => {
            return dispatch(receiveKitchenErrors(err.response.data))
        });
}