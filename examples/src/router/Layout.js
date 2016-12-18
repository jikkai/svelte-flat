import React from 'react'

class Layout extends React.Component {
  render () {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default Layout
