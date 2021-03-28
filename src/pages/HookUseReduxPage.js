import React from 'react'
import { useSelector, useDispatch } from "react-redux";
// useSelector 获取store state
// useDispatch 获取dispatch

export default function HookUseReduxPage() {
  const count = useSelector(({ count }) => count)
  const countTwo = useSelector((countTwo)=>countTwo)
  console.log(
    'countTwo',countTwo
  )
  const dispatch = useDispatch()//必须写在方法外部 

  const add = () => {
    
    dispatch({type:'ADD'})
  }
  return (
    <div>
      <button onClick={add}>add</button>
      {count}
      <button>-</button>

    </div>
  )
}
