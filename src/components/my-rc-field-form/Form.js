import React from 'react'

import FieldContext  from "./FieldContext";

//等会在这使用hook方法
export default function Form({ children, form,onFinish,onFinishFailed }) {
  // console.log('----',children,'((---',form)
  form.setCallback({
    onFinish,onFinishFailed
  })
  return (
    <form onSubmit={e => {
      e.preventDefault()
      // console.log('my-submit')
      form.submit()
    }}>
      <FieldContext.Provider value={form}>
        {children}
      </FieldContext.Provider>
      
    </form>
  )
}
