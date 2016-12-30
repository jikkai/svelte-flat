import React from 'react'

import Docs from 'sf/input/README.md'
import Input from 'sf/input/dist/index'
import 'sf/theme-default/dist/input.css'

import Examples from './examples.md'
import './style.css'

class InputRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: [
        { placeholder: 'Inactive' },
        { placeholder: 'Password', type: 'password' },
        { placeholder: 'Error', status: 'error', value: 'Error' },
        { placeholder: 'Success', status: 'success', value: 'Success' },
        { value: 'Disabled Input', disabled: true }
      ]
    }
  }

  componentDidMount () {
    const { input } = this.state
    for (let i = 0; i < input.length; i++) {
      new Input({
        target: document.querySelector(`#input${i + 1}`),
        data: input[i]
      })
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-input">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default InputRouter
