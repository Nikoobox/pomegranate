import axios from 'axios';

export const postKitchen = (kitchenData) => {
    debugger;
    return axios.post('/api/kitchens/', kitchenData);
}

export const getKitchen = (kitchenId) => {
    debugger;
    return axios.get(`/api/kitchens/${kitchenId}`);
}
