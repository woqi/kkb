import React, { Component } from 'react'
import { RouterContext } from "./Context";
import matchPath from './matchPath'

export default class Route extends Component {

  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { children, component, render, path } = this.props
          const { location } = context
          const match = this.props.computedMatch ?
            this.props.computedMatch : path
              ? matchPath(location.pathname, this.props) : context.match

          const props = { ...context, match }
          // console.log('match-----',matchPath(location.pathname, this.props))

          //match 渲染三者之一
          //children(function || 节点)>compoent>render
          //不match 渲染children(function)或者null
          //children不匹配渲染function

          // return match ? React.createElement(component) : null

          return (
            <RouterContext.Provider value={props}>
              {
                match ?
                  //children的优先级最高 
                  (children ?//判断children是否是函数是函数就直接执行，不是就是一个节点
                    (typeof children === 'function' ? children(props) : children) :
                    //children不存在此时判断component
                    (
                      component ? (
                        //存在就创建component
                        React.createElement(component, props)
                      ) : (render ? render(props) : null)
                    )
                  ) : (typeof children == 'function' ? children(props) : null)
              }
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )



  }
}
