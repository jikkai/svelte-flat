import React from 'react'
import hljs from 'highlightjs'

import Examples from './examples.md'
import './style.css'

class HomeRouter extends React.Component {
  componentDidMount () {
    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-home">
        <div className="examples-logo"></div>

        <div dangerouslySetInnerHTML={{ __html: Examples }} />
      </div>
    )
  }
}

export default HomeRouter
