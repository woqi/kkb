import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    const { children, to, ...restProps } = this.props
    return <a href={to} {...restProps}>{children}</a>
  }
}
