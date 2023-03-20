import {createStore} from 'redux'
import { counterReducer } from './services/reducers/CounterReducer'

export const store=createStore(counterReducer)
