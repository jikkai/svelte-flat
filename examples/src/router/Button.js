import React from 'react'
import Button from '../../../packages/button/dist/index'
import '../../../packages/theme-default/dist/button.css'

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
        <h2>Button 按钮</h2>

        <section className="examples">
          <h3>按钮类型</h3>
          <div>
            <div id="button1"></div>
            <div id="button2"></div>
            <div id="button3"></div>
            <div id="button4"></div>
            <div id="button5"></div>
            <div id="button6"></div>
            <div id="button7"></div>
          </div>
        </section>

        <section className="examples">
          <h3>禁用按钮</h3>
          <div>
            <div id="button8"></div>
          </div>
        </section>

        <section className="examples">
          <h3>浮雕按钮</h3>
          <div>
            <div id="button9"></div>
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
                <td>content</td>
                <td>展示文字</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>status</td>
                <td>类型</td>
                <td>String</td>
                <td>default,primary,info,danger,success,warning,inverse</td>
                <td>default</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
              </tr>
              <tr>
                <td>embossed</td>
                <td>是否启用浮雕效果</td>
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
                <td>onclick</td>
                <td>点击触发</td>
                <td>event</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ButtonRouter
