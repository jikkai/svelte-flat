import Message from './Message.html'
import Singleton from '~/utils/singleton'

export default ({ content = '', type = 'info', duration = 3 }) => {
  const message = new Message({
    target: new Singleton(),
    data: {
      content,
      type
    }
  })

  setTimeout(() => {
    message.destroy()
  }, duration * 1000)
}
