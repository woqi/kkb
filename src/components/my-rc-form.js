
import React, { Component } from 'react'

export default function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}//所有数据
      this.options = {}//存放校验规则
    }
    handleChange = e => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }
    getFieldDecorator = (field, option) => InputCmp => {
      this.options[field] = option
      // console.log('opt----', option)
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || '',
        onChange: this.handleChange
      })
    }
    setFieldsValue = newStore => {
      //
      this.setState(newStore)
    }
    getFieldsValue = () => {
      return this.state
    }
    validateFields = (callback) => {
      //校验规则 this.options
      //校验值 this.state
      let err = []
      for (let field in this.options) {
        if (!this.state[field]) {
          err.push({ [field]: 'err' })
        }
      }
      if (err.length === 0) {
        //校验成功
        callback(null, this.state)
      }else{
        callback(err,this.state)
      }

    }
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }

    render() {
      return <Cmp {...this.props} {...this.getForm()}></Cmp>
    }
  }
}


