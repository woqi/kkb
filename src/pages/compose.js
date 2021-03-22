function f1(arg) {
  console.log('f1', arg)
  return arg
}
function f2(arg) {
  console.log('f2', arg)
  return arg
}
function f3(arg) {
  console.log('f3', arg)
  return arg
}
function f4(arg) {
  console.log('f4', arg)
  return arg
}
//todo方法全部执行这三个函数
//方法1

// f1('omg')
// f2('omg')
// f3('omg')

//方法2 缺点啰嗦不利于维护

// f1(f2(f3('omg')))

//方法3
//compose的返回值是函数
function compose(...funcs) {
  //处理边界问题
  if(funcs.length === 0){
    return ()=>{}
  }

  //链式处理

  return funcs.reduce((a, b) => (...args) => a(b(...args)))

  //等价于这个写法

  // return funcs.reduce((a,b)=>{
  //   return (...args)=>{
  //     return a(b(...args))
  //   }
  // })
}
let res = compose(f1, f2, f3,f4)
console.log('res',res)