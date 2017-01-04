import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/button/README.md'
import Button from 'sf/button/lib'

import Examples from './examples.md'
import './style.css'

class ButtonRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      button: [
        { content: 'Primary Button', status: 'primary' },
        { content: 'Warning Button', status: 'warning' },
        { content: 'Default Button' },
        { content: 'Danger Button', status: 'danger' },
        { content: 'Success Button', status: 'success' },
        { content: 'Inverse Button', status: 'inverse' },
        { content: 'Info Button', status: 'info' },
        { content: 'Disabled Button', disabled: true },
        { content: 'Embossed Button', status: 'primary', embossed: true }
      ]
    }
  }

  componentDidMount () {
    const { button } = this.state
    for (let i = 0; i < button.length; i++) {
      new Button({
        target: document.querySelector(`#button${i + 1}`),
        data: button[i]
      })
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-button">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default ButtonRouter
