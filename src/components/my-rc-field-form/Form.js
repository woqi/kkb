import React from 'react'

import FieldContext  from "./FieldContext";
import useForm from "./useForm";

//等会在这使用hook方法
export default function Form({ children, form,onFinish,onFinishFailed },ref) {
  // console.log('----',children,'((---',form)
  //class组件使用时候 form无法从props上取值

  const [formInstance] = useForm()
  //在使用ref时自定义暴露给父组件的实例值，大多数情况避免使用ref
  React.useImperativeHandle(ref,()=>formInstance)

  // form.setCallback({ //hook使用
  formInstance.setCallback({
    onFinish,onFinishFailed
  })
  return (
    <form onSubmit={e => {
      e.preventDefault()
      // console.log('my-submit')
      // form.submit() //hook使用
      formInstance.submit()

    }}>
      {/* //hook使用 */}
      {/* <FieldContext.Provider value={form}> */}
      
      <FieldContext.Provider value={formInstance}>

        {children}
      </FieldContext.Provider>
      
    </form>
  )
}
