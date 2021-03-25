import React, { Component } from 'react'
import store from "../store/index";

export default class ReduxPage extends Component {
  componentDidMount() {
    //store发生变化，执行subscribe的监听函数
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    //取消订阅
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  add() {//同步
    store.dispatch({ type: 'ADD', payload: 1 })
  }

  asyAdd() {//异步
    store.dispatch(()=>{
      setTimeout(()=>{
        store.dispatch({type:'ADD'})
      },1000)
    })
  }
  add2(){
    store.dispatch({ type: 'ADD2', payload: 3 })
  }

  render() {
    return (
      <div>
        ReduxPage:
        <br></br>
        <button onClick={this.add}>+</button>
        
        {/* count数字:{store.getState().count}
        count2数字:{store.getState().count2} */}
        <button>-</button>
        <br></br>
        <button onClick={this.asyAdd}>async +</button>
        <p>@bbkk=={store.getState().count}</p>
        <br></br>
        <p onClick={this.add2}>count2数字@@{store.getState().countTwo.num}</p>

      </div>
    )
  }
}
