import Component from './index.html'

const SingleDOM = (function () {
  let instance
  const SingleDOM = function () {
    if (instance) {
      return instance
    }
    this.init()
    return instance = this
  }
  SingleDOM.prototype.init = function () {
    const MessageDOM = document.createElement('div')
    MessageDOM.id = 'sf-message--global'
    document.body.appendChild(MessageDOM)
  }
  return SingleDOM
})()

const Message = (data) => {
  new SingleDOM(data)

  const message = new Component({
    target: document.querySelector('#sf-message--global'),
    data
  })

  setTimeout(() => {
    message.teardown()
  }, 2000)
}

export default Message
