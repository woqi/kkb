import React, { useContext } from 'react'
import { ThemeContext } from '../common/Context'

export default function UseContextPage() {
  const { themeColor } = useContext(ThemeContext)
  return (
    <div>
      UseContextPage---
      <p className={themeColor}>hhiohohoi</p>
    </div>
  )
}
