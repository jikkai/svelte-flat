# Svelte Flat

> A Svelte Flat UI Toolkit for Web.

<p align="center">
  <a href="https://jikkai.github.io/svelte-flat">
    <img alt="Svelte Flat" src="/build/logo.png">
  </a>
</p>

## Installation

```bash
npm i svelte-flat --save
```

## Fully import

```javascript
import Flat from 'svelte-flat'
import 'svelte-flat/lib/theme-default/index.css'
```

## Single import

```javascript
import { Button } from 'svelte-flat'
import 'svelte-flat/lib/theme-default/button.css'
```

## On demand

Install [`babel-plugin-svelteflat`](https://github.com/jikkai/babel-plugin-svelteflat)

```bash
npm i babel-plugin-svelteflat -D
```

### Config files

edit `.babelrc`.

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

Then, if you need Button, you can import it without style,

```bash
import { Button } from 'svelte-flat'
```

## Forked version

[Here](https://github.com/gCombinator/svelte-flat-ui) is a forked version which named `svelte-flat-ui`.
