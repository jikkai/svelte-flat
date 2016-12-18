import React from 'react'
import { Link } from 'react-router'

class HeaderComponent extends React.Component {
  render () {
    return (
      <header className="examples-header">
        <Link to="/">
          <h1>
            <span>Svelte</span>
            <span>Flat</span>
          </h1>
        </Link>
      </header>
    )
  }
}

export default HeaderComponent
