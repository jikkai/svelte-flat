import React from 'react'
import HeaderComponent from 'components/Header'
import MenuComponent from 'components/Menu'
import FooterComponent from 'components/Footer'

class LayoutRouter extends React.Component {
  render () {
    return (
      <div className="examples-layout">
        <HeaderComponent />
        <main>
          <div>
            <MenuComponent />
            {this.props.children}
          </div>
        </main>
        <FooterComponent />
      </div>
    )
  }
}

export default LayoutRouter
