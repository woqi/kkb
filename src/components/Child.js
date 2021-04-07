import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props) 
    this.stete={}
  }
  componentDidMount(){
    console.log('Child -------- componentDidMount')
  }
  componentWillUnmount(){
    console.log('Child ----- componentWillUnmount')
  }
  render() {
    return (
      <div>
        Child---{this.props.count}
      </div>
    )
  }
}
