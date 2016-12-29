import React from 'react'
import Button from '../../../packages/button/dist/index'
import Message from '../../../packages/message/dist/index'
import '../../../packages/theme-default/dist/button.css'
import '../../../packages/theme-default/dist/message.css'

class MessageRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      button: [
        { content: '打开消息提示' },
        { content: '成功', status: 'success' },
        { content: '警告', status: 'warning' },
        { content: '信息', status: 'info' },
        { content: '错误', status: 'danger' }
      ],
      message: [
        { content: 'hello world' },
        { content: '成功提示', status: 'success' },
        { content: '警告提示', status: 'warning' },
        { content: '信息提示', status: 'info' },
        { content: '错误提示', status: 'danger' }
      ]
    }
  }

  componentDidMount () {
    const { button, message } = this.state

    for (let i = 0; i < message.length; i++) {
      const btn = new Button({
        target: document.querySelector(`#message${i + 1}`),
        data: button[i]
      })
      btn.onclick = () => {
        Message(message[i])
      }
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-message">
        <h2>Message 消息提示</h2>

        <section className="examples">
          <h3>基础用法</h3>

          <div>
            <div id="message1"></div>
          </div>
        </section>

        <section className="examples">
          <h3>消息类型</h3>

          <div>
            <div id="message2"></div>
            <div id="message3"></div>
            <div id="message4"></div>
            <div id="message5"></div>
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
                <td>info,danger,success,warning</td>
                <td>info</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default MessageRouter
