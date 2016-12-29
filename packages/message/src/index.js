import MessageComponent from './index.html'

const Message = (data) => {
  // TODO singleton
  const MessageDOM = document.createElement('div')
  MessageDOM.id = 'sf-message--global'
  document.body.appendChild(MessageDOM)

  new MessageComponent({
    target: document.querySelector('#sf-message--global'),
    data
  })
}

export default Message
