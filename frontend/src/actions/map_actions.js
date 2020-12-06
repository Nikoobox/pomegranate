import {getInfo} from './../util/map_api_util';

export const RECEIVE_INFO = "RECEIVE_INFO";


const receiveInfo = (info) => {
    return {
        type: RECEIVE_INFO,
        info
    }
};

export const fetchInfo = () => dispatch => {
    return getInfo()
        .then(info => {
            debugger
            return dispatch(receiveInfo(info));
        })
        .catch(err => console.log(err));
};