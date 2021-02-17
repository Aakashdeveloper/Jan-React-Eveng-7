import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducers/mainReducer';

//reducer connected to store
let store = createStore(reducer,applyMiddleware(logger));

export default store;