import { login, getMoreUserInfo } from "../../service/UserService";

//一代目
// export const userLogin = userInfo => ({
//   type: 'LOGIN_SUCCESS',
//   payload: userInfo
// })

//二代目

function userLoginApi(dispatch, userInfo) {
  login(userInfo).then(res => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res
    })
  }).catch(err => {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: err
    })
  })
}
export const userLogin = userInfo => {
  return dispatch => userLoginApi(dispatch, userInfo)
}

//这么写等不到异步的结果 
// export const userLogin = userInfo => dispatch => {
//   return userLoginApi(dispatch, userInfo)
// } 
