import React from 'react'
import ReactDOM from 'react-dom'

import Routers from './router'

import '../node_modules/highlightjs/styles/dracula.css'
import './themes/index'

ReactDOM.render(
  <Routers />,
  document.getElementById('app')
)
