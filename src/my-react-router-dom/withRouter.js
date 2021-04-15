import React from 'react'
import { RouterContext } from "./Context";

 const withRouter = WarppedComponent=>props=>{
  return<RouterContext.Consumer>
    {context=>{
      return <WarppedComponent {...props} {...context} />
    }}
  </RouterContext.Consumer>
}
export default withRouter