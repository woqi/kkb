import React, { Component, useState } from 'react'
import { connect, useDispatch } from "react-redux";

import { Redirect } from 'react-router';

import { userLoginApi, userLoginSaga } from "../store/action/login";

export default connect(
  ({login})=> ({
    isLogin: login.isLogin,
    loading: login.loading,
    err: login.err
  }),
  { userLoginSaga }
)(function LoginPage(props) {
  const { isLogin, location, err, userLoginApi, userLoginSaga, loading } = props;

  const [name, setName] = useState('')
  // const dispatch = useDispatch()

  function nameChange(e) {
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
          // userLoginApi({ name })
          userLoginSaga({name})
        }
        }>{loading?' loading...' :'login'}</button>
        <br></br>
        <i>{err.msg}</i>
      </div>
    )
  }
})




// @connect(
//   ({ login }) => ({ isLogin: login.isLogin, loading: login.loading, err: login.err }),
//   {
//     // userLogin,
//     userLoginSaga
//   }
//   // { userLogin: (userInfo) => ({ type: 'LOGIN_SUCCESS', payload: userInfo }) }
// )
// class LoginPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "" };
//   }
//   nameChange = e => {
//     // console.log('输入内容', e.target.value)
//     this.setState({ name: e.target.value });
//   }
//   render() {
//     const { isLogin, location, dispatch, userLogin, userLoginSaga, loading, err } = this.props;
//     const { name } = this.state;

//     if (isLogin) {
//       let { from = '/' } = location.lala || {}
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         LoginPage
//         <input value={name} onChange={this.nameChange} />
//         <button onClick={() => {
//           userLoginSaga({ name })
//         }}>
//           {loading ? ' loading...' : 'login'}
//         </button>
//         <i>{err.msg}</i>

//         {/* <button onClick={() => userLogin({ name })}>登陆</button> */}

//       </div>
//     )
//   }

// }

// export default LoginPage