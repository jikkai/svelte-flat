import React from 'react'
import { Link } from 'react-router'

class MenuComponent extends React.Component {
  render () {
    return (
      <div className="examples-menu">
        <ul>
          <li><Link to="/">首页</Link></li>
          <li>
            <h4>基础组件</h4>
            <ul>
              <li>
                <Link to="/button">Button 按钮</Link>
                <Link to="/input">Input 输入框</Link>
                <Link to="/video">Video 视频播放器</Link>
                <Link to="/slider">Slider 滑块</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuComponent
