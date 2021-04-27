import { login, getMoreUserInfo } from "../../service/UserService";

//一代目
// export const userLogin = userInfo => ({
//   type: 'LOGIN_SUCCESS',
//   payload: userInfo
// })

//二代目 redux thunk promise

// function userLoginApi(userInfo ,dispatch ) {
//   dispatch({type:'REQUEST'})
//   login(userInfo).then(res => {
//     dispatch({
//       type: 'LOGIN_SUCCESS',
//       payload: res
//     })
//   }).catch(err => {

//     dispatch({
//       type: 'LOGIN_FAILURE',
//       payload: {err}
//     })
//   })
// }
//userLogin写法1
// export const userLogin = userInfo => {
//   return dispatch => userLoginApi(dispatch, userInfo)
// }

//userLogin写法2
// export const userLogin = userInfo => dispatch => {
//   return userLoginApi(dispatch, userInfo)
// } 

//变量形式
export const userLoginApi = userInfo => dispatch => {
  dispatch({ type: 'REQUEST' })
  login(userInfo).then(res => {
    // dispatch({
    //   type: 'LOGIN_SUCCESS',
    //   payload: res
    // })

    //redux thunk缺点
    //异步请求的嵌套
    //如果有多个异步请求嵌套 就形成了嵌套地狱

    getMoreUserInfoApi(dispatch, res)

  }).catch(err => {

    dispatch({
      type: 'LOGIN_FAILURE',
      payload: { err }
    })
  })
}

export const getMoreUserInfoApi = (dispatch, userInfo) => {
  dispatch({ type: 'REQUEST' })
  getMoreUserInfo(userInfo).then(res => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res
    })
  }).catch(err => {

    dispatch({
      type: 'LOGIN_FAILURE',
      payload: { err }
    })
  })
}

//三代目 redux thunk async await
export function login3(userInfo){
  return async (dispatch)=>{
  dispatch({ type: 'REQUEST' })
    let res1 = await userLoginApi({dispatch,userInfo})
    if(res1){
      getMoreUserInfo(dispatch, res1)
    }
  }
}

//四代目
export const userLoginSaga = userInfo => ({
  type: 'LOGIN_SAGA',
  payload: userInfo
})



