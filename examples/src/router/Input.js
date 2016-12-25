import React from 'react'
import Input from '../../../packages/input/dist/index'
import '../../../packages/theme-default/dist/input.css'

class InputRouter extends React.Component {
  componentDidMount () {
    new Input({
      target: document.querySelector('#input1'),
      data: {
        placeholder: 'Inactive'
      }
    })

    new Input({
      target: document.querySelector('#input2'),
      data: {
        placeholder: 'Password',
        type: 'password'
      }
    })

    new Input({
      target: document.querySelector('#input3'),
      data: {
        placeholder: 'Error',
        status: 'error',
        value: 'Error'
      }
    })

    new Input({
      target: document.querySelector('#input4'),
      data: {
        placeholder: 'Success',
        status: 'success',
        value: 'Success'
      }
    })

    new Input({
      target: document.querySelector('#input5'),
      data: {
        value: 'Disabled Input',
        disabled: true
      }
    })
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
      </div>
    )
  }
}

export default InputRouter
