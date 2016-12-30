import React from 'react'
import Docs from '../../../packages/button/README.md'
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

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default ButtonRouter
