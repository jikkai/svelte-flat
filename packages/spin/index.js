import Spin from './Spin.html'
import Singleton from '~/utils/singleton'

let spin

const getInstance = _ => {
  if (!spin) {
    spin = new Spin({
      target: new Singleton()
    })
  }
  return spin
}

export default {
}
