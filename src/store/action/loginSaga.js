

//异步 call
//更新状态 put

import { call, put, takeEvery } from 'redux-saga/effects'
import { login, getMoreUserInfo } from "../../service/UserService";

// worker saga
function* loginHandle(action) {
  console.log('action--saga--', action.payload)
  yield put({type:'REQUEST'})
  try {
    //同步的方式实现异步
    const res1 = yield call(login, action.payload)
    console.log('res1--saga--', res1)
    const res2 = yield call(getMoreUserInfo, res1)
    yield put({ type: 'LOGIN_SUCCESS', payload: res2 })

  } catch (err) {

    yield put({ type: 'LOGIN_FAILURE', payload: err })
  }
}

// watcher saga
function* loginSaga() {
  yield takeEvery('LOGIN_SAGA', loginHandle)
}

export default loginSaga

