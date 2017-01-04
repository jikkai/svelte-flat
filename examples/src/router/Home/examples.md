## Svelte Flat
一套基于Svelte开发的UI组件库，轻松使用，简单上手，不依赖于任何框架。

### 安装
你可以使用npm的方式安装，当然我们更推荐使用yarn安装。
```bash
$yarn add svelte-flat
```

### 全局引入
全局引入，方便快捷。
```javascript
import Flat from 'svelte-flat' 
import 'svelte-flat/lib/theme-default/index.css'
```

### 单一组件引入
引入单个组件，缩减代码量。
```javascript
import { Button } from 'svelte-flat' 
import 'svelte-flat/lib/theme-default/button.css'
```
<!--
### 按需引入
如果你使用babel的话，可以安装`babel-plugin-svelteflat`插件自动按需引入组件。

#### 安装依赖
```bash
yarn add babel-plugin-svelteflat --dev
```

#### 配置及使用
在`.babelrc`中配置：
```json
{
  "plugins": [
    ["svelteflat", [{
      "libraryName": "svelte-flat",
      "styleLibraryName": "theme-default"
    }]]
  ]
}
```

然后就可以在代码中使用了：
```javascript
import { Button } from 'svelte-flat' 
```
-->