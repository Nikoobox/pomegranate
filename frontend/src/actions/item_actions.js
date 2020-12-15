import * as ItemAPIUtil from './../util/item_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEMS = "CLEAR_ITEMS";

const receiveItem = item => {
    return {
        type: RECEIVE_ITEM,
        item
    };
}

const receiveItems = items => {
    return {
        type: RECEIVE_ITEMS,
        items
    };
};

const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

const receiveItemErrors = errors => {
    return {
        type: RECEIVE_ITEM_ERRORS,
        errors
    }
}

const clearItems = () => {
    return {
        type: CLEAR_ITEMS
    }
}

export const getAllItems = () => dispatch => {
    return ItemAPIUtil.getAllItems()
        .then(items => {
            return dispatch(receiveItems(items))
        })
}

export const getUserItems = userId => dispatch => {
    return ItemAPIUtil.getUserItems(userId)
        .then(items => {
            return dispatch(receiveItems(items));
        })
        .catch(err => console.log(err));
}

export const getItem = itemId => dispatch => {
    return ItemAPIUtil.getItem(itemId)
        .then(item => {
            return dispatch(receiveItem(item));
        });
};

export const createItem = item => dispatch => {
    return ItemAPIUtil.postItem(item)
        .then(item => {
            return dispatch(receiveItem(item));
        }, err => {
            return dispatch(receiveItemErrors(err.response.data));
        });
};

export const editItem = item => dispatch => {
    return ItemAPIUtil.patchItem(item)
        .then(item => {
            return dispatch(receiveItem(item))
        }, err => {
            return dispatch(receiveItemErrors(err.response.data))
        });
};

export const deleteItem = itemId => dispatch => {
    return ItemAPIUtil.deleteItem(itemId)
        .then(item => {
            return dispatch(removeItem(item.data));
        });
};

export const clearItemState = () => dispatch => {
    return dispatch(clearItems());
};