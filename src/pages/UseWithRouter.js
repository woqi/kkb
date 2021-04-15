import React, { Component, Fragment } from 'react'
// import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom";
import { BrowserRouter, Route, Link, Switch,withRouter } from "../my-react-router-dom";

export default class UseWithRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/lala/123">UseWithRouter商品</Link>
          <Switch>
          <Route path="/lala/:id" component={Product} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

class Product extends Component {
  render() {
    const { params } = this.props.match
    return (
      <Fragment>
        <h1>router: lala -----Product </h1>
        <ProducSon />
      </Fragment>
    )
  }
}

// @withRouter
class ProducSon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    
    return (
      <div>
        第一层孙子：ProducSon
        <br></br>
        <ProducSonSon />
      </div>
    )
  }
}

@withRouter
class ProducSonSon extends Component {
  render() {
    console.log('RoutePage-ProducSonSon-props',this.props)
    return (
      <div>
        第二层孙子ProducSonSon
      </div>
    )
  }
}


