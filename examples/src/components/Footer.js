import React from 'react'
import { Link } from 'react-router'

class HeaderComponent extends React.Component {
  render () {
    return (
      <div className="examples-footer">
        <footer>
          <Link to="/">Github</Link>
        </footer>
      </div>
    )
  }
}

export default HeaderComponent
