import React, { Component } from 'react'
import { RouterContext } from "./Context";

export default class Link extends Component {
  static contextType = RouterContext
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = (e) => {
    e.preventDefault()
    this.context.history.push(this.props.to)
  }

  render() {
    const { children, to, ...restProps } = this.props
    return <a href={to}
      {...restProps}
      onClick={this.handleClick}
    >
      {children}
    </a>
  }
}
