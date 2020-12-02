import * as KitchenAPIUtil from './../util/kitchen_api_util';

export const RECEIVE_KITCHEN = "RECEIVE_KITCHEN";
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

export const createKitchen = kitchenData => dispatch => {
    return KitchenAPIUtil.postKitchen(kitchenData)
        .then(kitchen => {
            return dispatch(receiveKitchen(kitchen))
        }), err => {
            debugger
            return dispatch(receiveKitchenErrors(err.response.data))
        };
}