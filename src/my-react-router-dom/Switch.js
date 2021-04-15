//由于switch组件渲染匹配的第一个子节点route和redirect
//里面的route相当于children
//遍历children
//从第一个开始往下遍历，找到第一个匹配的渲染出来
//另一个功能是switch需要控制route和redirect匹配的东西
//siwtch匹配的优先级比route高
import React, { Component } from 'react'
import { RouterContext } from "./Context";
import matchPath from './matchPath'

export default class Switch extends Component {
  static contextType = RouterContext
  render() {
    // console.log('context-swicch', this.context)
    const { location } = this.context
    let match = undefined //匹配
    let element = undefined//匹配的元素
    //遍历children 给匹配赋值
    //React.Children.forEach react自带遍历
    //为什么用自带的 因为children可以是数组可以是单个的对象
    React.Children.forEach(this.props.children, child => {
      //React.isValidElement 判断是否为有效元素
      if (match == null && React.isValidElement(child)) {
        element = child
        const { path } = child.props
        // console.log('child=-=====', child)
        //判断match是否需要赋值
        //此处的match覆盖route的match
        //给element传递一个route去覆盖
        match = path ? matchPath(location.pathname, child.props) : this.context.match
      }
    })
    return match ? React.cloneElement(element, {
      computedMatch: match
    }) : null
  }
}
