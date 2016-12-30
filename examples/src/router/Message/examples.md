## Message 消息提示

在页面顶部创建一个浮层，用于展示通知或者提示。

<section class="example">
  <h3>基础用法</h3>

  <div>
    <div id="message1"></div>
  </div>
</section>

<section class="example">
  <h3>消息类型</h3>

  <div>
    <div id="message2"></div>
    <div id="message3"></div>
    <div id="message4"></div>
    <div id="message5"></div>
  </div>
</section>

### 代码示例
```javascript
Message({
  content: 'Awesome!',
  status: 'success'
})
```