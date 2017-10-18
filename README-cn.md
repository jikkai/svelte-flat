# Svelte Flat

> 一套基于 Svelte 开发的 UI 组件库，轻松使用，简单上手，不依赖于任何框架。

<p align="center">
  <a href="https://jikkai.github.io/svelte-flat">
    <img alt="Svelte Flat" src="/build/logo.png">
  </a>
</p>

## 安装

```bash
npm i svelte-flat
```

## 全局引入

```javascript
import Flat from 'svelte-flat'
import 'svelte-flat/lib/theme-default/index.css'
```

## 单组件引入

```javascript
import { Button } from 'svelte-flat'
import 'svelte-flat/lib/theme-default/button.css'
```

## 按需引入

如果使用babel的话，可以安装[`babel-plugin-svelteflat`](https://github.com/jikkai/babel-plugin-svelteflat)插件自动按需引入组件。

### 安装依赖

```bash
npm i babel-plugin-svelteflat -D
```

### 配置及使用

在`.babelrc`中按下例配置。

```json
{
  "plugins": [
    ["svelteflat", {
      "libraryName": "svelte-flat",
      "style": "theme-default"
    }]
  ]
}
```

插件会根据引入的组件自动按需引入 css 文件：

```bash
import { Button } from 'svelte-flat'
```
