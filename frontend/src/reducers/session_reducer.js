import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN,
    RECEIVE_USER
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

const SessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        case RECEIVE_USER:
            return {
                ...state,
                userInfo: action.user.data
            };
        default:
            return state;
    }
}

export default SessionReducer;