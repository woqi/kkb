import React, { useReducer, useEffect, useLayoutEffect } from 'react'
import { counterReducer } from "../store/reducer";

export default function HooksPage() {

  const init = (initArg) => initArg - 0

  const [state, dispatch] = useReducer(counterReducer, '0', init)//初始值是0
  const add = () => dispatch({ type: 'ADD', payload: 30 })

  useEffect(() => {
    console.log('useEffect')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })

  return (
    <div>
      <p>{state}</p>
      <button onClick={add}>www</button>
    </div>
  )
}
