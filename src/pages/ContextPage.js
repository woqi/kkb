import React, { Component } from 'react'
// import  HomePage  from "./HomePage";
import { ThemeProvider } from "../common/Context";

import ConsumerPage from "./ConsumerPage";
import ContextTypePage from "./ContextTypePage";
import UseContextPage from "./UseContextPage";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'green'
      },
      color: 'reddd'
    }
  }
  changeColor = () => {
    const { themeColor } = this.state.theme
    console.log('objethemeColorct---',themeColor)
    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'green' : 'red'
      }
    })
  }
  render() {
    const { theme, color } = this.state
    console.log('theme---',theme)
    return (
      <div>
        ContextPage
        <button onClick={this.changeColor}>change color</button>
        <ThemeProvider value={theme}>
          <ConsumerPage />
          <ContextTypePage />
          <UseContextPage />
          {/* <HomePage theme = { theme } /> */}
        </ThemeProvider>

      </div>
    )
  }
}

//如何使用context
//1.创建一个context对象： export const ThemeContext = React.createContext({themeColor:'pink'})
//2.provider提供者 接收一个value value是需要传递的参数
//3.子组件接收，三种方法（ContextType（只能用在类组件中）、Consumer、useCotext(只能用在函数组件中或者自定义hook)）
//
