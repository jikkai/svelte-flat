import React from 'react'
import Button from '../../../packages/button/dist/index'
import '../../../packages/theme-default/dist/button.css'

class ButtonRouter extends React.Component {
  componentDidMount () {
    new Button({
      target: document.querySelector('#button1'),
      data: {
        content: 'Default Button'
      }
    })
    new Button({
      target: document.querySelector('#button2'),
      data: {
        content: 'Primary Button',
        status: 'primary'
      }
    })
    new Button({
      target: document.querySelector('#button3'),
      data: {
        content: 'Info Button',
        status: 'info'
      }
    })
    new Button({
      target: document.querySelector('#button4'),
      data: {
        content: 'Danger Button',
        status: 'danger'
      }
    })
    new Button({
      target: document.querySelector('#button5'),
      data: {
        content: 'Success Button',
        status: 'success'
      }
    })
    new Button({
      target: document.querySelector('#button6'),
      data: {
        content: 'Warning Button',
        status: 'warning'
      }
    })
    new Button({
      target: document.querySelector('#button7'),
      data: {
        content: 'Disabled Button',
        disabled: true
      }
    })
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
          </div>
        </section>

        <section className="examples">
          <h3>禁用按钮</h3>
          <div>
            <div id="button7"></div>
          </div>
        </section>
      </div>
    )
  }
}

export default ButtonRouter
