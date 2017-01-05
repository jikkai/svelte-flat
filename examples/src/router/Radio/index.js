import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/radio/README.md'
import Radio from 'sf/radio/lib'

import Examples from './examples.md'
import './style.css'

class RadioRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      radio: [
        { label: 'Radio' },
        { checked: true, label: 'Checked Radio' },
        { label: 'Radio', disabled: true },
        { checked: true, label: 'Checked Radio', disabled: true }
      ]
    }
  }

  componentDidMount () {
    const { radio } = this.state
    for (let i = 0; i < radio.length; i++) {
      Radio({
        target: document.querySelector(`#radio${i + 1}`),
        data: radio[i]
      })
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-radio">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default RadioRouter
