import LoadingBar from './LoadingBar.html'
import Singleton from '~/utils/singleton'

let loadingBar
let timer

const getInstance = _ => {
  if (!loadingBar) {
    loadingBar = new LoadingBar({
      target: new Singleton()
    })
  }
  return loadingBar
}

export default {
  update (percent = 0) {
    loadingBar.set({
      percent
    })
  },

  destroy () {
    setTimeout(_ => {
      if (loadingBar) {
        loadingBar.set({ visible: false })
        setTimeout(_ => {
          loadingBar.destroy()
          loadingBar = null
        }, 200)
      }
    }, 600)
  },

  start () {
    clearInterval(timer)
    const instance = getInstance()

    let percent = 0
    timer = setInterval(() => {
      percent += Math.floor(Math.random () * 3 + 5)
      if (percent > 95) {
        clearInterval(timer)
      }
      this.update(percent)
    }, 200)
  },

  finish () {
    clearInterval(timer)

    const instance = getInstance()
    this.update(100)
    this.destroy()
  },

  error () {
    clearInterval(timer)

    const instance = getInstance()
    instance.set({ type: 'error' })
    this.update(100)
    this.destroy()
  }
}
