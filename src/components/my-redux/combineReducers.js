//接收的对象

//返回一个总的函数
export default function combineReducers(reducers) {
  return function combinnation(state = {}, action) {
    //上一次的state和action
    let nextState = {}//返回新state
    let hasChanged = false
    for (const key in reducers) {
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
      //比较这两次参数是否相等nextState[key] = reducer(state[key],
      hasChanged = hasChanged || nextState[key] !== state[key]
      //假如动态reduce 需要对比新旧state长度
      hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length
    }
    return hasChanged? nextState : state
  }
}