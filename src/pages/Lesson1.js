import React, { Component } from 'react'
import Input from "../components/Input";
// import { createForm } from 'rc-form';
import createForm from '../components/my-rc-form.js'

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

@createForm

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
    const { validateFields} = this.props.form
    // getFieldsValue, 
    // console.log('submit-----', getFieldsValue())
    validateFields((err,val)=>{

      if(err){
        console.log('报错---',err)
      }else{
        console.log('校验成功',val)
      }
    })

  }
  save = (name, e) => {
    // console.log('namne',name)
    let val = e.target.value
    // console.log('val----',val)
    if (name === 'username') {
      this.setState({ username: val })
    }

    if (name === 'password') {
      this.setState({ password: val })
    }


  }
  render() {
    const { username, password } = this.state
    const { getFieldDecorator } = this.props.form
    // console.log('props', this.props)
    return (
      <div>
        {/* getFieldDecorator接受一个组件返回新组件 */}
        {getFieldDecorator('username', {rules:[nameRules]})(
          <Input placeholder="Username"
            val={username}
            onChange={(e) => this.save('username', e)}
          />
        )}
        {getFieldDecorator('password',{rules: passworRules})(
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