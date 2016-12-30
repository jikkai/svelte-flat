import MessageComponent from './index.html'

const SingleMessageDOM = (function () {
  let instance
  const SingleMessageDOM = function () {
    if (instance) {
      return instance
    }
    this.init()
    return instance = this
  }
  SingleMessageDOM.prototype.init = function () {
    const MessageDOM = document.createElement('div')
    MessageDOM.id = 'sf-message--global'
    document.body.appendChild(MessageDOM)
  }
  return SingleMessageDOM
})()

const Message = (data) => {
  new SingleMessageDOM(data)

  const message = new MessageComponent({
    target: document.querySelector('#sf-message--global'),
    data
  })

  setTimeout(() => {
    message.teardown()
  }, 2000)
}

export default Message
