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

  new MessageComponent({
    target: document.querySelector('#sf-message--global'),
    data
  })
}

export default Message
