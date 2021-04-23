import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

//路由守卫，实质是在跳转路由前加判断
//登陆操作
//未登陆去登陆页面，同事将当前地址记录下来，登陆后跳转至原页面
export default connect(
  ({ login }) => {
    return { isLogin: login.isLogin }
  }
)(
  function PrivateRoute({
    isLogin,
    path,
    component: Component,
    ...restProps }) {
    // console.log('PrivateRoute---props---', arguments)
    return <Route
      {...restProps}
      render={
        (props) => {
          console.log('Route---props',props)//路由信息
          return(isLogin ?
          <Component {...props} /> :
          <Redirect
            to={{ pathname: '/login', lala: { from: props.location.pathname } }}
          />)}
      }
    />

  }
)
