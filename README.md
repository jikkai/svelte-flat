# svelte-flat 

> WIP, Please DO NOT use in production.

![img](http://img.shields.io/npm/v/svelte-flat.svg)
![img](http://img.shields.io/badge/license-MIT-blue.svg)

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

## Browser Support
Unknown.

## Development
```bash
# Build all components
$ yarn 
$ yarn run init
$ yarn run build
```

## License
[MIT](https://github.com/jikkai/svelte-flat/blob/master/LICENSE)