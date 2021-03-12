import React, { Component } from 'react'
import { ThemeConsumer } from "../common/Context";


export default class ConsumerPage extends Component {
  render() {
    return (
      <div >
        ConsumerPage---
        <ThemeConsumer>
          {themeContext =>{
            return(
              <p className={themeContext.themeColor}>omggggg</p>
            )
          }}
        </ThemeConsumer>
      </div>
    )
  }
}
