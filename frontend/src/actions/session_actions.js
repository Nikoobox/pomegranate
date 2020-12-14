import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignIn = user => ({
    type: RECEIVE_USER_SIGN_IN,
    user
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(user => {
            return dispatch(receiveUserSignIn(user))
        }, err => {
            return dispatch(receiveErrors(err.response.data))
        });
};

export const login = user => dispatch => {
    return APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
        .catch(err => dispatch(receiveErrors(err.response.data)));
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};

export const getUser = userId => dispatch => {
    return APIUtil.getUser(userId)
        .then(user => {
            return dispatch(receiveUser(user));
        });
}