import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/loading/README.md'
import Button from 'sf/button/lib'
import Loading from 'sf/loading/lib'

import Examples from './examples.md'
import './style.css'

class LoadingRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      button: [
        { content: '打开加载组件，3秒后自动关闭', status: 'info' },
        { content: '打开dark主题的加载组件', status: 'info' }
      ],
      loading: [
        { theme: 'light' },
        { theme: 'dark' }
      ]
    }
  }

  componentDidMount () {
    const { button, loading } = this.state
    for (let i = 0; i < loading.length; i++) {
      const btn = new Button({
        target: document.querySelector(`#loading${i + 1}`),
        data: button[i]
      })
      btn.onclick = () => {
        const component = Loading(loading[i])
        setTimeout(() => {
          component.teardown()
        }, 3000)
      }
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-loading">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default LoadingRouter
