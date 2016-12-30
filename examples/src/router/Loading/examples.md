## Loading 加载

创建一个加载浮层以降低用户等待某一操作时的焦躁。

<section class="example">
  <h3>基础用法</h3>

  <div>
    <div id="loading1"></div>
  </div>
</section>

<section class="example">
  <h3>主题</h3>

  <div>
    <div id="loading2"></div>
  </div>
</section>

### 代码示例
```javascript
// 打开加载浮层
const loading = Loading()

// 关闭加载浮层
loading.teardown()
```