import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "../my-react-router-dom";

export default function MyReactRouter() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/user">用户</Link>
        <Link to="/login">登陆</Link>
        <Link to="/product/123">404</Link>

        <Switch>
          <Route exact path="/"
            // children={Children}
            component={Home}
            render={Render}
          />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          {/* 使用route默认的match */}
          <Route path="*" component={Nomatch_404} />
        </Switch>



      </BrowserRouter>

    </div>
  )
}

function Render() {
  return (
    <div>
      Render
    </div>
  )
}
function Children() {
  return (
    <div>
      Children
    </div>
  )
}

function Home() {
  return (
    <div>
      Home
    </div>
  )
}

function Login() {
  return (
    <div>
      Login
    </div>
  )
}

function User() {
  return (
    <div>
      User
    </div>
  )
}

function Nomatch_404() {
  return (
    <div>
      <h3>_404Page</h3>
    </div>
  );
}