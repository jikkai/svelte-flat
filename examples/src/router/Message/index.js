import React from 'react'

import Docs from 'sf/message/README.md'
import Button from 'sf/button/dist/index'
import Message from 'sf/message/dist/index'
import 'sf/theme-default/dist/button.css'
import 'sf/theme-default/dist/message.css'

import './style.css'

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

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default MessageRouter
