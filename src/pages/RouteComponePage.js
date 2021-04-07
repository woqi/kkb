import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Child from "../components/Child";


export default class RouteComponePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    const { count } = this.state

    return (
      <div>
        RouteComponePage
        <hr></hr>
        <button onClick={() => { this.setState({ count: count + 1 }) }}>
          count: {count}
        </button>
        <BrowserRouter>
          <Route component={()=><Child count={count}/>} />

          {/* <Route children={()=><Child count={count}/>} /> */}
          {/* <Route children={()=><Child count={count}/>} /> */}


          {/* <Route render={()=><Child count={count}/>} /> */}
         
        </BrowserRouter>
      </div>
    )
  }
}

// function FunctionChild(props){}
