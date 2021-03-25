import { counterReducer, counterReducer2 } from "./reducer";

import { applyMiddleware, createStore,combineReducers } from 'redux'

import thunk from "redux-thunk";

import logger from "redux-logger";



const store = createStore(
  combineReducers({
    count: counterReducer,
    countTwo: counterReducer2
  }),
  applyMiddleware(thunk, logger))

export default store