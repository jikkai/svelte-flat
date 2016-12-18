import React from 'react'
import HeaderComponent from 'components/Header'
import MenuComponent from 'components/Menu'

class LayoutRouter extends React.Component {
  render () {
    return (
      <div>
        <HeaderComponent />
        <main>
          <div>
            <MenuComponent />
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

export default LayoutRouter
