import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Button from './Button'

class Routers extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="button" component={Button}/>
        </Route>
      </Router>
    )
  }
}

export default Routers
