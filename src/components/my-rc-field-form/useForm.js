import React from "react";
//定义一个仓库
class FormStore {
  constructor(props) {
    this.store = {}//store管理数据

    // 存储下Field 实例
    this.fieldEntities = [];
// 为了存onFinish,onFinishFailed 
    this.callbacks = {};
  }

  //有订阅就有 取消订阅
  registerField = (entity) => {

    this.fieldEntities.push(entity)
    return () => {
      this.fieldEntities = this.fieldEntities.filter(item => {
        return item !== entity

      })
      delete this.store[entity.props.name]
    }
  }

  setCallback = callback =>{
    this.callbacks = {
      ...this.callback,
      ...callback
    }
  }

  submit = () => {
    console.log('提交数据')
    //1.校验，
    //2.根据校验结果，如果校验成功调用onFinish，失败onFinishFailed
    let err = this.validate();
    const {onFinish, onFinishFailed} = this.callbacks;
    if (err.length === 0) {
      // 成功的话 执行onFinish
      onFinish(this.store);
    } else if (err.length > 0) {
      // ，失败执行onFinishFailed
      onFinishFailed(err);
    }
  }

  setFieldsValue = (newStore) => {//设置this.store
    //将newStore更新到store中
    this.store = {
      ...this.store,
      ...newStore
    }
    console.log('newstore',this.store)

    //数组中找到实例然后更新
    this.fieldEntities.forEach(e => {
      const { name } = e.props
      Object.keys(newStore).forEach(key => {
        if (name === key) {
          e.onStoreChange()
        }
      })


    })
  }

    // 这是个简单的校验
    validate = () => {
      // 存储错误信息了，
      let err = [];
      // todo
      this.fieldEntities.forEach(entity => {
        const {name, rules} = entity.props;
        let value = this.getFieldValue(name);
        let rule = rules && rules[0];
        if (rule && rule.required && (value === undefined || value === "")) {
          //  出错
          err.push({
            [name]: rules.message,
            value
          });
        }
      });
      return err;
    };


  //获取field的值
  getFieldValue = (name) => {
    return this.store[name]
  }

  getForm() {
    return {
      submit: this.submit,
      setCallback: this.setCallback,
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      registerField: this.registerField
    }
  }
}
export default function useForm(form) {//此处获取实例
  const formRef = React.useRef()

  if(!formRef.current){
    //实现复用
    if(form){
      formRef.current = form
    }else{
     const formStore = new FormStore()
     formRef.current = formStore.getForm()
    }
  }

  // if (!formRef.current) {
  //   const formStore = new FormStore()//此处组件每一次改动都要new一个，没有实现把上一次的参数留下来
  //   formRef.current = formStore.getForm()
  // }

  return [formRef.current]
}