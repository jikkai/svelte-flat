import React from 'react'
import ReactDOM from 'react-dom'

import Routers from './router'

import '../node_modules/highlightjs/styles/dracula.css'
import 'sf/theme-default/lib/index.css'
import './common.css'

ReactDOM.render(
  <Routers />,
  document.getElementById('app')
)
