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
import 'svelte-flat/packages/theme-default/dist/index.css'
```

### 单一组件引入
引入单个组件，缩减代码量。
```javascript
import { Button } from 'svelte-flat' 
import 'svelte-flat/packages/theme-default/dist/button.css'
```

### 按需引入
如果你使用babel的话，可以安装`babel-plugin-svelteflat`插件自动按需引入组件。

#### 安装依赖
```bash
yarn add babel-plugin-svelteflat --dev
```

#### 使用
```javascript
import { Button } from 'svelte-flat' 
```