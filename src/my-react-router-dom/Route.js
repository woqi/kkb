import React, { Component } from 'react'

export default class Route extends Component {
  render() {
    const { component } = this.props
    return React.createElement(component)
  }
}
