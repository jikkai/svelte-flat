import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Button from './Button'
import Input from './Input'
import Video from './Video'
import Slider from './Slider'

class Routers extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="button" component={Button}/>
          <Route path="input" component={Input}/>
          <Route path="video" component={Video}/>
          <Route path="slider" component={Slider}/>
        </Route>
      </Router>
    )
  }
}

export default Routers
