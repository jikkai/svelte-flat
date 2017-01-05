## Radio 单选框

提供单选框供用户进行单项选择。

<section class="example">
  <h3>基础单选框</h3>

  <div>
    <div id="radio1"></div>
    <div id="radio2"></div>
  </div>
</section>

<section class="example">
  <h3>禁用状态</h3>

  <div>
    <div id="radio3"></div>
    <div id="radio4"></div>
  </div>
</section>

### 代码示例
```javascript
const radio = Radio({
  target: document.querySelector('#radio'),
  data: {
    checked: true,
    label: 'Checked Radio'
  }
})

```