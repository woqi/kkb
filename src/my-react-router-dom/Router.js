import React, { Component } from 'react'
import { RouterContext } from "./Context";
export default class Router extends Component {
  static computeRootMatch(pathname) {
    return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
  }
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location//初始值
    }
    this._isMounted = false;
    this._pendingLocation = null;

    // console.log('==', props.history)

    //监听location变化
    this.unlisten = props.history.listen(value => {
      if (this._isMounted) {
        this.setState({ location: value.location });
      } else {
        this._pendingLocation = value.location;
      }
    });


  }
  componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({ location: this._pendingLocation });
    }

  }

  componentWillUnmount() {
    // 取消监听
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  }

  render() {
    return <RouterContext.Provider value={{
      history: this.props.history,
      location: this.state.location,
      match: Router.computeRootMatch(this.state.location.pathname)//传递一个默认的match
    }}>
      {this.props.children}
    </RouterContext.Provider>

  }
}
