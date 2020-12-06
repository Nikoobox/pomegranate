import axios from 'axios';

export const getInfo = () => {
    return axios.get('/userInfo')
};