//接受一个字符串或者一个对像
import React, { Component } from 'react'
import { RouterContext } from "./Context";
import Lifecycle from "./Lifecycle";

export default class Redirect extends Component {
  //render需要返回当前组件的子节点，跳转走就没有children，所以不能直接操纵生命周期
  static contextType = RouterContext
  render() {
    const { to, push = false } = this.props
    const { history } = this.context
    return <Lifecycle
      onMount={() => {
        push ? history.push(to) : history.replace(to)
      }}
    />
  }
}

