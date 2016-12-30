import React from 'react'
import ReactDOM from 'react-dom'

import Routers from './router'

import 'sf/theme-default/dist/common.css'
import './themes/index'

ReactDOM.render(
  <Routers />,
  document.getElementById('app')
)
