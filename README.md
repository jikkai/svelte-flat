# svelte-flat 

![img](http://img.shields.io/npm/v/svelte-flat.svg)
![img](http://img.shields.io/badge/license-MIT-blue.svg)

> WIP, Please DO NOT use in production.

<p align="center">
  <a href="https://jikkai.github.io/svelte-flat/">
    <img alt="svelte-flat" src="https://github.com/jikkai/svelte-flat/raw/master/examples/src/assets/logo.png">
  </a>
</p>

## Installation
```bash
$ yarn add svelte-flat
```

## Usage
```javascript
import { Button } from 'svelte-flat'
import 'svelte-flat/packages/theme-default/dist/button.css'

const button = new Button({
  target: document.querySelector('#button'),
  data: {
    content: 'Default Button'
  }
})
button.onclick = function (e) {
  console.log('hello world')
}
```

## Documentation
[Documentation](https://jikkai.github.io/svelte-flat/)

## Build all components
```bash
$ yarn 
$ yarn run init
$ yarn run build:components
$ yarn run build:all
```

## Build docs
```
$ cd examples
$ yarn
$ yarn run dev
$ yarn run build
```

## License
MIT