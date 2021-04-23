import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../routes/PrivateRoute/PrivateRoute";
import _404 from "../pages/_404";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/user">用户中心</Link>
      <Link to="/login">登录</Link>

      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/user" component={UserPage} /> */}
        <PrivateRoute path="/user" component={UserPage} />
        <Route path="/login" component={LoginPage} />



        <Route path="*" component={_404} />
      </Switch>

    </BrowserRouter>
  );
}