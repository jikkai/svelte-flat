import React from 'react'
import { Link, IndexLink } from 'react-router'

class MenuComponent extends React.Component {
  render () {
    return (
      <div className="examples-menu">
        <ul>
          <li><IndexLink activeClassName="active" to="/">首页</IndexLink></li>
          <li>
            <h4>基础样式</h4>
            <ul>
              <li>
                <Link activeClassName="active" to="/color">Color 色彩</Link>
                <Link activeClassName="active" to="/icon">Icon 图标</Link>
              </li>
            </ul>
          </li>
          <li>
            <h4>组件</h4>
            <ul>
              <li>
                <Link activeClassName="active" to="/button">Button 按钮</Link>
                <Link activeClassName="active" to="/input">Input 输入框</Link>
                <Link activeClassName="active" to="/video">Video 视频播放器</Link>
                <Link activeClassName="active" to="/slider">Slider 滑块</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuComponent
