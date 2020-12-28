import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    if (process.env.NODE_ENV === 'development') {
        return createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(thunk, logger)
        )
    } else if (process.env.NODE_ENV === 'production'){

        return createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(thunk)
        )
    }
}

export default configureStore;