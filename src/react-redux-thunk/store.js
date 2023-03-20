import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './services/reducers/TodoReducer';

export const store=createStore(todoReducer,applyMiddleware(thunk))