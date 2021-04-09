import React, { Component } from 'react'
import { RouterContext } from "./Context";
import matchPath from './matchPath'

export default class Route extends Component {

  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { component, path, children, render } = this.props
          const { location } = context
          // const match = path
          //   ? matchPath(location.pathname, this.props) === path : context.match
          //   console.log('match',matchPath(location.pathname, this.props))
          console.log('locs',location)
          console.log('pathname',location.pathname)
          let newPath = location
          console.log('path',path)
          const match = newPath.pathname === path
          console.log('match', match)
          return match ? React.createElement(component) : null

        }
        }
      </RouterContext.Consumer>
    )



  }
}
