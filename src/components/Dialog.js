import React, { Component } from 'react'
import { createPortal } from "react-dom";
//传送门有两个参数 第一个是需要带走的组件，第二个是去的地址

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    const win = window.document
    this.node = win.createElement('div')
    win.body.appendChild(this.node);

  }
  componentWillUnmount(){
    if(this.node){
      window.document.body.removeChild(this.node )
    }
  }
  render() {
    return createPortal(//想将dialog提升到body下而不是dialogPage中
      <div className="dialog">
        <h3>Dialog</h3>
      </div>,
      this.node
    )
  }
}
