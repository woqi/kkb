import React, { Component } from 'react'

import { ThemeContext  } from "../common/Context";

export default class ContextTypePage extends Component {
  static contextType = ThemeContext 
  render() {
    const {themeColor} = this.context
    console.log('ContextTypePage---themeColor--',themeColor)
    return (
      <div>
        ContextTypePage-----
        <p className={themeColor}>{themeColor} </p>
      </div>
    )
  }
}
