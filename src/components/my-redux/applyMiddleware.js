
// import { compose } from "redux"

export default function applyMiddleware(...middlewars) {
  return createStore => reducer => {
    const store = createStore(reducer)
    let dispatch = store.dispatch //初始值的dispatch

    const midApi = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    }
    //返回store，同时加强dispatch
    const middlewareChain = middlewars.map(middlewar => middlewar(midApi))

    dispatch = _compose(...middlewareChain)(store.dispatch)
    return {
      ...store,
      //返回了加强版的dispatch
      dispatch
    }
  }
}


function _compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}