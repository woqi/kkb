import React,{useContext} from 'react'
import { ThemeContext } from "./Context";

export default function UserPage(props) {
  const context = useContext(ThemeContext)
  console.log('context---',context)
  return (
    <div>
      UserPage----{context}
    </div>
  )
}
