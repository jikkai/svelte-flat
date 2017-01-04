## Slider 滑块

通过滑动滑块改变值。

<section class="example">
  <h3>基础滑块</h3>

  <div>
    <div id="slider1"></div>
  </div>
</section>

### 代码示例
```javascript
Slider({
  target: document.querySelector('#slider'),
  data: {
    value: 33
  }
})
```