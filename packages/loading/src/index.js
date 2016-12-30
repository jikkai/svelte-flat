import LoadingComponent from './index.html'

const SingleLoadingDOM = (function () {
  let instance
  const SingleLoadingDOM = function () {
    if (instance) {
      return instance
    }
    this.init()
    return instance = this
  }
  SingleLoadingDOM.prototype.init = function () {
    const LoadingDOM = document.createElement('div')
    LoadingDOM.id = 'sf-loaindg--global'
    document.body.appendChild(LoadingDOM)
  }
  return SingleLoadingDOM
})()

const Loading = (data) => {
  new SingleLoadingDOM(data)

  const loading = new LoadingComponent({
    target: document.querySelector('body'),
    data
  })

  return loading
}

export default Loading
