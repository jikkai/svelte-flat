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
    const LoadingDOM = document.createElement('div')
    LoadingDOM.id = 'sf-loading--global'
    document.body.appendChild(LoadingDOM)
  }
  return SingleDOM
})()

const Loading = (data) => {
  new SingleDOM(data)

  const loading = new Component({
    target: document.querySelector('#sf-loading--global'),
    data
  })

  return loading
}

export default Loading
