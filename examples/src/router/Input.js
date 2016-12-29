import React from 'react'
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

        <section className="documents">
          <h3>Attributes</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>value</td>
                <td>值</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>type</td>
                <td>类型</td>
                <td>String</td>
                <td>text,password</td>
                <td>text</td>
              </tr>
              <tr>
                <td>status</td>
                <td>状态</td>
                <td>String</td>
                <td>default,error,success</td>
                <td>default</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>占位文本</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>

          <h3>Events</h3>
          <table>
            <thead>
              <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>onfocus</td>
                <td>获得焦点时触发</td>
                <td>event</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default InputRouter
