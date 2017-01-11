## Audio 音频播放器

提供一个简单的HTML5音频播放器，用于播放音频。

<section class="example">
  <h3>基础播放器</h3>

  <div>
    <div id="audio1"></div>
  </div>
</section>

### 代码示例
```javascript
Audio({
  target: document.querySelector('#audio'),
  data: {
    src: '...',
    width: 620,
    height: 350
  }
})
```