export default function createStore(reducer, enhancer) {
  //enhancer是一个强化，未加applyMiddleware之前只能接受一些对象，加了后可以接受函数
  
  if(enhancer){
    //强化createStore中的dispatch
    return enhancer(createStore)(reducer)
  }

  let currentState
  let currentListeners = [] //因为有多个监听
  //获取状态
  function getState() {
    return currentState
  }
  //修改状态
  function dispatch(action) {
    currentState = reducer(currentState, action)
    // state发生变化时候进行subscribe
    //依次执行
    currentListeners.forEach(listener => listener())
  }
  function subscribe(listener) {
    currentListeners.push(listener)
    //返回取消订阅的函数
    return()=>{
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index,1)
    }
  }
  //手动执行以下dispatch，赋上初始值
  dispatch({type:'KOKOO'})
  return {
    getState,
    dispatch,
    subscribe
  }
}