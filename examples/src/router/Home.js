import React from 'react'
import { Link } from 'react-router'

class HomeRouter extends React.Component {
  render () {
    return (
      <div className="fadein">
        <img src="../assets/logo.png" />
        <Link to="button">Button</Link>
      </div>
    )
  }
}

export default HomeRouter
