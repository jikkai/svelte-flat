## Video 视频播放器

提供一个简单的HTML5视频播放器，用于播放视频。

<section class="example">
  <h3>基础播放器</h3>

  <div>
    <div id="video1"></div>
  </div>
</section>

### 代码示例
```javascript
Video({
  target: document.querySelector('#video'),
  data: {
    src: '...',
    width: 620,
    height: 350
  }
})
```