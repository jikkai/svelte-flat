import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/message/README.md'
import Button from 'sf/button/lib'
import Message from 'sf/message/lib'

import Examples from './examples.md'
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
      const btn = Button({
        target: document.querySelector(`#message${i + 1}`),
        data: button[i]
      })
      btn.onclick = () => {
        Message(message[i])
      }
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-message">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default MessageRouter
