import { loginReducer, counterReducer2 } from "./reducer";

import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from "redux-thunk";

// import createSagaMiddleware from "redux-saga";
// import mySaga from "./mySaga";


//创建
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   combineReducers({
//     login: loginReducer,
//     countTwo: counterReducer2
//   }),
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // applyMiddleware(sagaMiddleware)
// )

//运行
// sagaMiddleware.run(mySaga);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    login: loginReducer,
    countTwo: counterReducer2
  }),
  composeEnhancers(applyMiddleware(thunk))
  // applyMiddleware(sagaMiddleware)
)

export default store