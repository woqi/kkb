import React, { useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function ReactReduxHookPage() {
  const count = useSelector(({ count }) => count)
  const dispatch = useDispatch()
  const add = useCallback(
    //做一个缓存，存到虚拟dom节点上，不缓存每一次可能都重新对比数据，引发组件不必要的渲染
    () => {
      dispatch({ type: 'ADD' })
    }
    // [input],
  )

  return (
    <div>
      ReactReduxHookPage
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  )
}


// function foo(so) { this.a = so }
// var obj1 = { foo: foo }
// var obj2 = {}
// obj1.foo(2)
// console.log(obj1.a)
// obj1.foo.call(obj2, 3)
// console.log(obj2.a)
// var bar = new obj1.foo(4)
// console.log(obj1.a)
// console.log(bar.a)


// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

// async function async2() {
//   console.log('async2')
// }

// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// async1();
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve();
// }).then(function () {
//   console.log('promise2')
// })

// console.log('script end')