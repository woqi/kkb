import { call, put, takeEvery } from "redux-saga/effects";
import { login } from "../service/UserService";

//worker saga
function* loginHandle(action) {
  const res = yield call(login,{name:'小明'})
  console.log('loginHandle-----------res', res);
}
//watcher saga
function* mySaga(props) {
  console.log('mySaga---------saga',props)
  yield takeEvery('login', loginHandle)
}

export default mySaga