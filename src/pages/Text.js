import React, { Component } from 'react'

export default class Text extends Component {
  // click(){
  //   console.log('object')
  // }
  click=()=>{
    console.log('object')
  }

  render() {
    return (
      <div>
        <div onClick={()=>this.click()}>shiahishdiaosdh</div>
      </div>
    )
  }
}
