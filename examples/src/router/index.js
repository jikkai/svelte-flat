import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Color from './Color'
import Typography from './Typography'
import Icon from './Icon'
import Button from './Button'
import Input from './Input'
import Checkbox from './Checkbox'
import Video from './Video'
import Slider from './Slider'
import Message from './Message'
import Loading from './Loading'

class Routers extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="color" component={Color} />
          <Route path="typography" component={Typography} />
          <Route path="icon" component={Icon} />
          <Route path="button" component={Button} />
          <Route path="input" component={Input} />
          <Route path="checkbox" component={Checkbox} />
          <Route path="video" component={Video} />
          <Route path="slider" component={Slider} />
          <Route path="message" component={Message} />
          <Route path="loading" component={Loading} />
          <Route path="*" component={Home} />
        </Route>
      </Router>
    )
  }
}

export default Routers
