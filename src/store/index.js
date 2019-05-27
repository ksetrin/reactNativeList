import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {
  payments,
} from './reducers'

const initialState = {}
const reducer = combineReducers({
  payments,
})

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware)
  )
)

export default store
