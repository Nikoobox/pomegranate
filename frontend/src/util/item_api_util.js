import axios from 'axios';

export const getAllItems = () => {
    return axios.get('/api/items/');
}

export const getKitchenItems = (kitchenId) => {
    return axios.get(`/api/items/${kitchenId}`);
}

export const getItem = itemId => {
    return axios.get(`/api/items/${itemId}`);
};

export const postItem = itemData => {
    return axios.post('/api/items/', itemData);
}

export const patchItem = (itemData) => {
    return axios.patch(`/api/items/${itemData._id}`, itemData);
};

export const deleteItem = itemId => {
    return axios.delete(`/api/items/${itemId}`);
};