import React, { Component } from 'react'
import Input from "../components/Input";
// import { createForm } from 'rc-form';
import createForm from '../components/my-rc-form.js'

@createForm()
//这样每输入一次整个表单都重复渲染
class Lesson1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

  }
  componentDidMount() {
    this.props.form.setFieldsValue({
      username: '请输入姓名',
      password: '请输入密码'
    })
  }
  submit = () => {
    const { getFieldsValue } = this.props.form
    console.log('submit-----', getFieldsValue())

  }
  save = (name, e) => {
    // console.log('namne',name)
    let val = e.target.value
    if (name === 'username') {
      this.setState({ username: val })
    }

    if (name === 'password') {
      this.setState({ password: val })
    }


  }
  render() {
    console.log('props', this.props)
    const { username, password } = this.state
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        {/* getFieldDecorator接受一个组件返回新组件 */}
        {getFieldDecorator('username')(
          <Input placeholder="Username"
            val={username}
            onChange={(e) => this.save('username', e)}
          />
        )}
        {getFieldDecorator('password')(
          <Input placeholder="Password"
            val={password}
            onChange={(e) => this.save('password', e)}
          />
        )}
        {/* <Input placeholder="Username"
          value={username}
          onChange={(e) => this.save('username', e)}
        /> */}

        {/* <Input placeholder="Password"
          value={password}
          onChange={(e) => this.save('password', e)}
        /> */}
        <button onClick={this.submit}>submit嘿嘿 </button>

      </div>
    )
  }
}
export default Lesson1;