import React, { Component, useState } from 'react'
import { connect, useDispatch } from "react-redux";

import { Redirect } from 'react-router';

import { userLogin } from "../store/action/login";

export default connect(
  ({ login }) => {
    console.log('LoginPage---connect', login)
    return ({ login })
    // return ({
    //   err: login.err,
    //   isLogin: login.isLogin,
    //   loading: login.loading
    // })
  },
  { userLogin }
)(function LoginPage(props) {
  console.log('LoginPage---props', props)

  const { isLogin, location, err, userLogin } = props;
  const dispatch = useDispatch()
  const [name, setName] = useState('')


  function nameChange(e) {
    console.log('输入内容', e.target.value)
    setName(e.target.value)

  }

  if (isLogin) {
    let { from = '/' } = location.lala || {}
    return <Redirect to={from} />
  } else {
    return (
      <div>
        LoginPage---
        <br />
        <input value={name} onChange={nameChange} />

        {/* 这里的action需要那props上的，因为props上的携带了dispatch，不然需要手动的dispatch */}
        <button onClick={() => {
          userLogin({ name })
          console.log('LoginPage---props---思安吉后', props)
        }
        }>登陆</button>
        <br></br>
        {/* {
          err.msg ? <i>{err.msg}</i> : ''
        } */}

      </div>
    )
  }


})




// @connect(
//   ({ login }) => login,
//   { userLogin }
//   // { userLogin: (userInfo) => ({ type: 'LOGIN_SUCCESS', payload: userInfo }) }
// )
// class LoginPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "" };
//   }
//   nameChange = e => {
//     console.log('输入内容', e.target.value)
//     this.setState({ name: e.target.value });
//   }
//   render() {
//     const { isLogin, location, dispatch, userLogin, loading, err } = this.props;
//     const { name } = this.state;

//     if (isLogin) {
//       let { from = '/' } = location.lala || {}
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         LoginPage
//         <input value={name} onChange={this.nameChange} />

//         <button onClick={() => userLogin({ name })}>登陆</button>
//       </div>
//     )
//   }

// }

// export default LoginPage