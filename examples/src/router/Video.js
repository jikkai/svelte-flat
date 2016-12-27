import React from 'react'
import Video from '../../../packages/video/dist/index'
import '../../../packages/theme-default/dist/video.css'
import mp4 from '../assets/demo.mp4'

class VideoRouter extends React.Component {
  componentDidMount () {
    new Video({
      target: document.querySelector('#video1'),
      data: {
        src: mp4,
        width: 620,
        height: 350,
        loop: false
      }
    })
  }

  render () {
    return (
      <div className="examples-router examples-router-video">
        <h2>Video 视频播放器</h2>

        <section className="examples">
          <h3>基础播放器</h3>

          <div>
            <div id="video1"></div>
          </div>
        </section>

        <section className="documents">
          <h3>Attributes</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>width</td>
                <td>宽度</td>
                <td>Number</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>height</td>
                <td>高度</td>
                <td>Number</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>src</td>
                <td>视频链接</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>loop</td>
                <td>是否开启循环</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default VideoRouter
