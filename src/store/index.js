import { counterReducer, counterReducer2 } from "./reducer";

// import { applyMiddleware, createStore,combineReducers } from 'redux'
import { createStore, applyMiddleware,combineReducers } from "../components/my-redux";


// import thunk from "redux-thunk";

// import logger from "redux-logger";

function thunk(dispatch, getState) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
}

function _logger({ dispatch, getState }) {
  return next => action => {
    console.log('++++++++++++++++++++++++++')

    const preState = getState()
    console.log('preState-----------', preState)

    //next state
    const returnValue = next(action)
    const nextState = getState()
    console.log('nextState-----------', nextState)

    console.log('++++++++++++++++++++++++++')
    return returnValue
  }
}


const store = createStore(
  combineReducers({
    count: counterReducer,
    countTwo: counterReducer2
  }),
  applyMiddleware(thunk, _logger))

export default store