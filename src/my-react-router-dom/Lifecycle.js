import React, { Component } from 'react'

export default class Lifecycle extends Component {
  componentDidMount() {
    //使用到当前的生命周期
    console.log('componentDidMount',this)
    if (this.props.onMount) this.props.onMount.call(this, this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount',this)
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  }

  render() {
    return null;
  }
}