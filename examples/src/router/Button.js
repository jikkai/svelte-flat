import React from 'react'
import Button from '../../../packages/button/dist/index'
import '../../../packages/theme-default/dist/button.css'

class ButtonRouter extends React.Component {
  componentDidMount () {
    const button1 = new Button({
      target: document.querySelector('#button1'),
      data: {
        content: 'Default Button'
      }
    })
    button1.onclick = function (e) {
      console.log(e)
    }
    const button2 = new Button({
      target: document.querySelector('#button2'),
      data: {
        content: 'Primary Button',
        status: 'primary'
      }
    })
    button2.onclick = function (e) {
      console.log(e)
    }
    const button3 = new Button({
      target: document.querySelector('#button3'),
      data: {
        content: 'Info Button',
        status: 'info'
      }
    })
    button3.onclick = function (e) {
      console.log(e)
    }
    const button4 = new Button({
      target: document.querySelector('#button4'),
      data: {
        content: 'Danger Button',
        status: 'danger'
      }
    })
    button4.onclick = function (e) {
      console.log(e)
    }
    const button5 = new Button({
      target: document.querySelector('#button5'),
      data: {
        content: 'Success Button',
        status: 'success'
      }
    })
    button5.onclick = function (e) {
      console.log(e)
    }
    const button6 = new Button({
      target: document.querySelector('#button6'),
      data: {
        content: 'Warning Button',
        status: 'warning'
      }
    })
    button6.onclick = function (e) {
      console.log(e)
    }
    const button7 = new Button({
      target: document.querySelector('#button7'),
      data: {
        content: 'Disabled Button',
        disabled: true
      }
    })
    button7.onclick = function (e) {
      console.log(e)
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
