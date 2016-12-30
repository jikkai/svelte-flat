import React from 'react'

import Docs from 'sf/button/README.md'
import Button from 'sf/button/dist/index'
import 'sf/theme-default/dist/button.css'

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
