import Loading from './Loading.html'
import Singleton from '~/utils/singleton'

export default $element => {
  const loading = new Loading({
    target: new Singleton()
  })

  if (typeof $element === 'undefined' || typeof $element === 'null') {
    $element = document.body
  } else if (typeof $element === 'string') {
    $element = document.querySelector($element)
  }

  const { width, height } = $element.getBoundingClientRect()
  const top = $element.offsetTop
  const left = $element.offsetLeft
  loading.set({
    style: {
      position: $element === document.body ? 'fixed' : 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`
    }
  })

  return {
    close () {
      loading.destroy()
    }
  }
}
