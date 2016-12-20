import React from 'react'

class HeaderComponent extends React.Component {
  render () {
    return (
      <div className="examples-footer">
        <footer>
          <div className="examples-footer-left">
            <h3>Svelte Flat</h3>
            <img src="https://img.shields.io/npm/v/svelte-flat.svg" />
          </div>
          <div className="examples-footer-right">
            <a href="https://blog.asaki.me" target="_blank">Blog</a>
            <a href="https://github.com/jikkai/svelte-flat" target="_blank">Github</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default HeaderComponent
