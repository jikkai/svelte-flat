## Input 输入框

普通的字符输入框。

<section class="example">
  <h3>基础输入框</h3>

  <div>
    <div id="input1"></div>
    <div id="input2"></div>
  </div>
</section>

<section class="example">
  <h3>带状态的输入框</h3>

  <div>
    <div id="input3"></div>
    <div id="input4"></div>
  </div>
</section>

<section class="example">
  <h3>禁用输入框</h3>

  <div>
    <div id="input5"></div>
  </div>
</section>

### 代码示例
```javascript
const input = Input({
  target: document.querySelector('#input'),
  data: {
    type: 'text'
  }
})

input.onfocus = () => {
  console.log(button.get('value'))
}
```