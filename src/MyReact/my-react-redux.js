// import { bindActionCreators } from "redux";
import React, { useContext, useReducer, useLayoutEffect } from "react";

const Context = React.createContext()

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
) => WrapCom => props => {
  const store = useContext(Context)
  console.log('----!!', store)
  const { dispatch, getState } = store
  const stateProps = mapStateToProps(getState())
  //给新返回的组件props上加store中的state和dispatch（不是特指dispatch这个方法）
  let dispatchProps = { dispatch }

  //在函数组件中引起更新
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  useLayoutEffect(() => {
    const unSubscribe = store.subscribe(() => { forceUpdate() })
    return () => {
      if (unSubscribe) unSubscribe()
    }
  }, [store])

  if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatchProps)
  } else if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  }

  return <WrapCom {...props}{...stateProps}{...dispatchProps} />
}



//store传递
export function Provider({ store, children }) {
  //context传递
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}



//包装一层dispatch
function bindActionCreator(creator, dispatch) {
  return (...args) => {
    // console.log('object++++++++++++===========',creator)
    return dispatch(creator(...args))
  }
}

export function bindActionCreators(creators, dispatch) {
  //接受creators对象和dispatch函数
  //遍历对象返回新对象，此时的新对象被加了一层dispatch
  let obj = {}
  //遍历
  for (const key in creators) {
    // console.log('---', creators[key])
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj

}


//自定义hook
export function useSelector(selector) {
  //任务是获取state
  const store = useContext(Context)
  const selectedState = selector(store.getState())

  //在函数组件中引起更新
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  useLayoutEffect(() => {
    const unSubscribe = store.subscribe(() => { forceUpdate() })
    return () => {
      if (unSubscribe) unSubscribe()
    }
  }, [store])

  return selectedState
}
// function useStore() {
//   const store = useContext(Context)
//   return store
// }


export function useDispatch() {
  //任务是返回一个dispatch
  const store = useContext(Context)
  return store.dispatch
}
