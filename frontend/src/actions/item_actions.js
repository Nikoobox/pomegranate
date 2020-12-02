import * as ItemAPIUtil from './../util/item_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const REMOVE_ITEM = "REMOVE_ITEM";

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

const receiveItemErrors = (err) => {
    return {
        type: RECEIVE_ITEM_ERRORS,
        err
    }
}

export const getAllItems = () => dispatch => {
    return ItemAPIUtil.getAllItems()
        .then(items => {
            return dispatch(receiveItems(items))
        })
}

export const getKitchenItems = () => dispatch => {
    return ItemAPIUtil.getKitchenItems()
        .then(items => {
            return dispatch(receiveItems(items))
        })
}


export const getItem = itemId => dispatch => {
    return ItemAPIUtil.getItem(itemId)
        .then((item) => {
            return dispatch(receiveItem(item));
        });
};

export const createItem = item => dispatch => {
    return ItemAPIUtil.postItem(item)
        .then(item => {
            return dispatch(receiveItem(item)),
            err => dispatch(receiveItemErrors(err))
        });
};

export const updateItem = item => dispatch => {
    return ItemAPIUtil.patchItem(item)
        .then((item) => {
            return dispatch(receiveItem(item));
        });
};

export const deleteItem = itemId => dispatch => {
    return ItemAPIUtil.deleteItem(itemId)
        .then((item) => {
            return dispatch(removeItem(item.id));
        });
};