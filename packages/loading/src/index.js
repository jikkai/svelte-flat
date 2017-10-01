import Loading from './Loading.html'
import Singleton from '~/utils/singleton'

let loading
let timer

const getInstance = _ => {
  if (!loading) {
    loading = new Loading({
      target: new Singleton()
    })
  }
  return loading
}

export default {
  update (percent = 0) {
    loading.set({
      percent
    })
  },

  destroy () {
    setTimeout(_ => {
      if (loading) {
        loading.destroy()
        loading = null
      }
    }, 1000)
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
