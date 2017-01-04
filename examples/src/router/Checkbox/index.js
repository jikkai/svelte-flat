import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/checkbox/README.md'
import Checkbox from 'sf/checkbox/lib'

import Examples from './examples.md'
import './style.css'

class CheckboxRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checkbox: [
        { label: 'Checkbox' },
        { checked: true, label: 'Checked Checkbox' },
        { label: 'Checkbox', disabled: true },
        { checked: true, label: 'Checked Checkbox', disabled: true }
      ]
    }
  }

  componentDidMount () {
    const { checkbox } = this.state
    for (let i = 0; i < checkbox.length; i++) {
      new Checkbox({
        target: document.querySelector(`#checkbox${i + 1}`),
        data: checkbox[i]
      })
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-checkbox">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default CheckboxRouter
