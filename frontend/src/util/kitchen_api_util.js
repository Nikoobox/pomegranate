import axios from 'axios';

export const postKitchen = (kitchenData) => {
    debugger;
    return axios.post('/api/kitchens/', kitchenData);
}
