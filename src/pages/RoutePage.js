import React from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";


export default function RoutePage() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/user">用户</Link>
        <Link to="/login">登陆</Link>
        <Link to="/product/123">商品</Link>
        <Link to="/">重定向</Link>
        <Switch>
          <Route exact path="/"
            // children={children}
            component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product/:id" component={Product} />
          <Route path="/welcome" component={Welcome} />
          <Route path="*" component={Nomatch_404 } />

        </Switch>


      </BrowserRouter>


    </div>
  )
}
function Welcome(){
  return (
    <div>
      Welcome
    </div>
  )
}

function Product(props) {
  console.log('props-match', props.match)
  const { url } = props.match
  const { id } = props.match.params
  
  return (
    <div>
      Product
      <p>{id}</p>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url+'/detail'} component={Detail}></Route>
    </div>
  )
}
function Detail(props){
  return (
    <div>
      Detail
    </div>
  )
}
function Home() {
  return (
    <div>
      Home
    </div>
  )
  // return(
    // <Redirect to={{pathname:'/welcome'}}></Redirect>
  // )
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


