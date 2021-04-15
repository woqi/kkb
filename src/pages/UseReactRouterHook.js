import React, { Component, useState } from 'react'
// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   Link,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   Prompt
// } from "react-router-dom";

import {
  BrowserRouter, Route, Link, Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  // Prompt
} from "../my-react-router-dom";

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

function Product(props) {
  const confirm = true
  let message = '确认离开？'

  //hook方法
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  const params = useParams()

  // console.log('match', match)
  // console.log('history', history)
  // console.log('location', location)
  // console.log('params', params)


  const { url } = props.match
  const { id } = props.match.params

  return (
    <div>
      Product@@~~
      <p>id:{id}</p>
      {/* <Prompt when={confirm} message={message}></Prompt> */}
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={Detail}></Route>
    </div>
  )
}

function Detail(props) {
  return (
    <div>
      Detail@@~~
    </div>
  )
}