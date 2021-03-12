import React, { Component } from 'react'
import { ThemeContext } from "./Context";

import  UserPage from "./UserPage";

export default class HomePage extends Component {
  static contextType = ThemeContext
  render() {
    console.log('----xoll----', this.context)
    const { themeColor } = this.props.theme

    return (
      <div className={themeColor}>
        {/* className={themeColor} */}
        HomePage----{this.context}
        <UserPage></UserPage>
      </div>
    )
  }
}
