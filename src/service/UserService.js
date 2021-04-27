export function login(userInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userInfo.name === '小明') {
        resolve({ id: 123, name: '小明登陆了' })
      } else {
        reject({ err: { msg: "用户名或密码错误" } });
      }
    }, 1000);
  })
}

export function getMoreUserInfo(userInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userInfo.id === 123) {
        resolve({ ...userInfo, score: '204' })
      } else {
        reject({ msg: '获取详细信息有误' })
      }
    }, 1000);

  })
}