import React from 'react'

import './style.css'

class HeaderComponent extends React.Component {
  render () {
    return (
      <div className="examples-footer">
        <footer>
          <div className="examples-footer-left">
            <h3>Svelte Flat</h3>
            <img src="https://img.shields.io/npm/v/svelte-flat.svg" />
          </div>
        </footer>
      </div>
    )
  }
}

export default HeaderComponent
