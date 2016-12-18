import React from 'react'
import Button from '../../../packages/button/dist/index'
import '../../../packages/theme-default/dist/button.css'

class ButtonRouter extends React.Component {
  componentDidMount () {
    var button1 = new Button({
      target: document.querySelector('#button1'),
      data: {
        content: 'Default Button'
      }
    })
    button1.onclick = function (e) {
      console.log(e)
    }
    var button2 = new Button({
      target: document.querySelector('#button2'),
      data: {
        content: 'Primary Button',
        type: 'primary'
      }
    })
    button2.onclick = function (e) {
      console.log(e)
    }
    var button3 = new Button({
      target: document.querySelector('#button3'),
      data: {
        content: 'Info Button',
        type: 'info'
      }
    })
    button3.onclick = function (e) {
      console.log(e)
    }
    var button4 = new Button({
      target: document.querySelector('#button4'),
      data: {
        content: 'Danger Button',
        type: 'danger'
      }
    })
    button4.onclick = function (e) {
      console.log(e)
    }
    var button5 = new Button({
      target: document.querySelector('#button5'),
      data: {
        content: 'Success Button',
        type: 'success'
      }
    })
    button5.onclick = function (e) {
      console.log(e)
    }
    var button6 = new Button({
      target: document.querySelector('#button6'),
      data: {
        content: 'Warning Button',
        type: 'warning'
      }
    })
    button6.onclick = function (e) {
      console.log(e)
    }
    var button7 = new Button({
      target: document.querySelector('#button7'),
      data: {
        content: 'Inverse Button',
        type: 'inverse'
      }
    })
    button7.onclick = function (e) {
      console.log(e)
    }
    var button8 = new Button({
      target: document.querySelector('#button8'),
      data: {
        content: 'Disabled Button',
        disabled: true
      }
    })
    button8.onclick = function (e) {
      console.log(e)
    }
  }

  render () {
    return (
      <div>
        <h1>Button</h1>

        <div id="button1"></div>
        <div id="button2"></div>
        <div id="button3"></div>
        <div id="button4"></div>
        <div id="button5"></div>
        <div id="button6"></div>
        <div id="button7"></div>
        <div id="button8"></div>
      </div>
    )
  }
}

export default ButtonRouter
