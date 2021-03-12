import React, { Component } from 'react'



// const foo = (Cmp) => props => {
//   return (
//     <div className="border">
//       <Cmp {...props}></Cmp>
//     </div>
//   )
// }

// function Child(props) {
//   return (
//     <div className="border">
//       Child---{props.name}
//     </div>
//   )
// }
// //高阶组件只能用于class组件
// const Foo = foo(Child)//高阶组件

// const Fbo = foo(foo(Child))//高阶组件链式调用
class Child extends Component {
  render(){
    return(
      <div className = "border" >
        Child-- - { this.props.name }
      </div>
    )
  }

}


export default class HocPage extends Component {
  render() {
    return (
      <div>
        HocPage
        {/* <Foo name="参数"></Foo>
        <Fbo name='海绵宝宝'></Fbo> */}
        <Child></Child>
      </div>
    )
  }
}
