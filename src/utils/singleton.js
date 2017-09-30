let instance

class Singleton {
  constructor () {
    if (!instance) {
      instance = document.createElement('div')
      document.body.appendChild(instance)
    }

    return instance
  }
}

export default Singleton
