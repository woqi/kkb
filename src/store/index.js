import { loginReducer, counterReducer2 } from "./reducer";

import { applyMiddleware, createStore, combineReducers, compose } from 'redux'

// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

import loginSaga from "./action/loginSaga";


//创建
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   combineReducers({
//     login: loginReducer,
//     countTwo: counterReducer2
//   }),
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // applyMiddleware(sagaMiddleware)
// )



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    login: loginReducer,
    countTwo: counterReducer2
  }),
  applyMiddleware(sagaMiddleware)
  // composeEnhancers(applyMiddleware(thunk))

)

//运行
sagaMiddleware.run(loginSaga)

export default store