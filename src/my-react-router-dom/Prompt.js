import React, { useContext } from 'react'
import Lifecycle from "./Lifecycle.js";
import { RouterContext } from "./Context";


export default function Prompt({ message, when = true }) {
  const context = useContext(RouterContext)
  console.log('con------', context)
  if (!when) {
    return null
  }
  let method = context.history.block
  return (
    <Lifecycle 
      onMount={(self) => {
        self.release = method(message)
      }}
      onUnMount={(self) => {
        self.release()
      }}
    
    />

  )
}
