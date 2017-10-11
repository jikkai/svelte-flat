import Confirm from './Confirm'
import Singleton from '~/utils/singleton'

export default ({
  title = '提示',
  content = '',
  cancelButtonText = '取消',
  confirmButtonText = '确定'
}) => {
  const confirm = new Confirm({
    target: new Singleton(),
    data: {
      title,
      content,
      cancelButtonText,
      confirmButtonText
    }
  })

  return new Promise((resolve, reject) => {
    confirm.on('confirm', () => {
      confirm.handleClose()
      resolve()
    })
    confirm.on('cancel', () => {
      confirm.handleClose()
      reject()
    })
  })
}
