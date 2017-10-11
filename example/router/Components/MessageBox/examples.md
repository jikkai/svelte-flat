## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 设置标题文字 | string | - | 提示 |
| content | 设置正文内容 | string | - | - |
| cancelButtonText | 设置取消按钮文字 | string | - | 取消 |
| confirmButtonText | 设置确认按钮文字 | string | - | 确认 |

## 回调函数

实例返回了一个 `Promise`，通过，点击确认按钮的时候会触发 `then` 内的回调函数，点击取消则会触发 `catch` 内的回调函数。
