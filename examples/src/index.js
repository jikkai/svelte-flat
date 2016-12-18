import React from 'react'
import ReactDOM from 'react-dom'

import Routers from './router'

import 'han-css/dist/han.min.css'
import './themes/index'

ReactDOM.render(
  <Routers />,
  document.getElementById('app')
)
