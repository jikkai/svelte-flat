function throttle (func, wait = 100, context = this) {
  let timeout = null 
  let funcArgs = null

  const later = () => {
    func.apply(context, funcArgs)
    timeout = null
  }

  return (...args) => {
    if (!timeout) {
      funcArgs = args
      timeout = setTimeout(later, wait)
    }
  }
}

export default throttle
