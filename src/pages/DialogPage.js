import React, { Component } from 'react'
import Dialog from "../components/Dialog";
// src\components\Dialog.js

export default class DialogPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDialog: false
    }
  }
  toggle=()=>{
    this.setState({showDialog: !this.state.showDialog})
  }
  render() {
    return (
      <div className="dialogPage">
        <button onClick={this.toggle}>点击</button>
        {this.state.showDialog && <Dialog />}
      </div>
    )
  }
}
