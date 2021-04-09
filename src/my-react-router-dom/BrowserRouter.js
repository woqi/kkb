import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import Router from './Router';

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory()
  }
  render() {
    // console.log('this.props.children---',this.pr ops.children)
    return <Router history={this.history}>{this.props.children}</Router>

  }
}
