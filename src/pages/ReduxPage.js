import React, { Component } from 'react'
// import store from "../store/index";
import { connect, } from "react-redux";//将所有state和dispatch放在props上
import { bindActionCreators } from "redux";

@connect(
  //有两个参数
  //mapStateToProps
  (count) => (count),
  //count => ({c: count})//如果想修改名字 props上就是c了

  //mapDispatchToProps

  // {
  //   add: () => ({ type: 'ADD' })
  // }

  //dispatch和_add共存
  // dispatch => {
  //   const _add = () => dispatch({ type: 'ADD' })
  //   const minus = () => dispatch({ type: 'MINUS' })
  //   return {
  //     dispatch,
  //     _add,
  //     minus
  //   }
  // }

  //如果有很多方法 此时可以用 bindActionCreators
  
  dispatch => {
    let creators = {
       _add :() => ({ type: 'ADD' }),
       minus: () => ({ type: 'MINUS' })
    }
    creators = bindActionCreators(creators,dispatch)
    return {
      dispatch,
      ...creators
    }
  }
  
)
class ReduxPage extends Component {

  add = () => {//同步
    // store.dispatch({ type: 'ADD', payload: 1 })
    this.props.dispatch({ type: 'ADD', payload: 1 })
  }

  asyAdd = () => {//异步
    this.props.dispatch(() => {
      setTimeout(() => {
        this.props.dispatch({ type: 'ADD' })
      }, 1000)
    })
  }
  add2() {
    this.props.dispatch({ type: 'ADD2', payload: 3 })
  }

  render() {
    console.log('props----', this.props)
    const { count, _add, countTwo, minus} = this.props
    return (
      <div>
        ReduxPage:
        <br></br>
        <button onClick={this.add}>+</button>

        <button onClick={minus}>-</button> {/*  */}

        <br></br>
        <button onClick={this.asyAdd}>async +</button>
        <p>@bbkk=={count}</p>
        <br></br>
        <p onClick={this.add2}>count2数字@@{countTwo.num}</p>
        <p onClick={_add}>count_ _add数字@@{count}</p>

      </div>
    )
  }
}
export default ReduxPage
