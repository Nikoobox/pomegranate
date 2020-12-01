import axios from 'axios';

export const getKitchens = (userId) => {
    return axios.get(`/api/kitchens/user/${userId}`);
}

export const postKitchen = (kitchenData) => {
    return axios.post('/api/kitchens/', kitchenData);
}