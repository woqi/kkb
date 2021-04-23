import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function UserPage() {
  const userInfo = useSelector(state=>state.login.userInfo)
  console.log('loginpage---', userInfo)
  return (
    <div>
      UserPage---
      <p>id: {userInfo.id}</p>
      <p>name: {userInfo.name}</p>
      <p>score: {userInfo.score}</p>
    </div>
  )
}
