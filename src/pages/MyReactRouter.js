import React from 'react'
import { BrowserRouter, Route, Link } from "../my-react-router-dom";

export default function MyReactRouter() {
  return (
    <div>
      MyReactRouter
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/user">用户</Link>
        <Link to="/login">登陆</Link>
        <Link to="/product/123">404</Link>


        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Nomatch_404} />

        
      </BrowserRouter>

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