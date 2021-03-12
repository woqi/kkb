import React, { Component } from 'react'
import FieldContext from "./FieldContext";

//field该文件是实例

//因为方便，为了使用contextType 也可用函数组件
export default class Field extends Component {
  static contextType = FieldContext

  componentDidMount() {//注册
    const { registerField } = this.context

    this.unRe = registerField(this)
  }
// componentDidUpdate
  componentWillUnmount() {//取消注册
    if (this.unRe) {
      this.unRe()
    }
  }

  //store执行刷新方法，强制刷新
  onStoreChange() {
    this.forceUpdate()
  }

  getControlled = () => {
    const { name } = this.props
    const { getFieldValue, setFieldsValue } = this.context
    return {
      value: getFieldValue(name),//'ommm',//仓库可以储存这个value，这里可以直接get
      onChange: (event) => {
        const newValue = event.target.value
        console.log('newValue', newValue)
        //想重新设置input value，执行仓库的set函数就可以
        //设置对象，name是个变量
        setFieldsValue({ [name]: newValue });
      }
    }
  }
  render() {
    const { children } = this.props
    const returnChildNode = React.cloneElement(children, this.getControlled())
    return returnChildNode

  }
}
