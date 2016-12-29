import React from 'react'
import Button from '../../../packages/button/dist/index'
import Message from '../../../packages/message/dist/index'
import '../../../packages/theme-default/dist/button.css'
import '../../../packages/theme-default/dist/message.css'

class MessageRouter extends React.Component {
  componentDidMount () {
    const button1 = new Button({
      target: document.querySelector(`#message1`),
      data: {
        content: '消息提示',
        status: 'primary'
      }
    })
    button1.onclick = () => {
      Message({
        content: 'hello world'
      })
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
                <td>Number</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default MessageRouter
