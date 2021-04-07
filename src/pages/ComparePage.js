import React from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function ComparePage() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch> */}

          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/"
            children={() => <h2>children page</h2>}
            // component={Home}
            // render={() => <h2>render page</h2>}
          >
            {/* <Home /> */}
          </Route>
        {/* </Switch> */}

      </BrowserRouter>

      

    </div>
  )
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}