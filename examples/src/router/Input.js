import React from 'react'
import Docs from '../../../packages/input/README.md'
import Input from '../../../packages/input/dist/index'
import '../../../packages/theme-default/dist/input.css'

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
        <h2>Input 输入框</h2>

        <section className="examples">
          <h3>基础输入框</h3>

          <div>
            <div id="input1"></div>
            <div id="input2"></div>
          </div>
        </section>

        <section className="examples">
          <h3>带状态的输入框</h3>

          <div>
            <div id="input3"></div>
            <div id="input4"></div>
          </div>
        </section>

        <section className="examples">
          <h3>禁用输入框</h3>

          <div>
            <div id="input5"></div>
          </div>
        </section>

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default InputRouter
