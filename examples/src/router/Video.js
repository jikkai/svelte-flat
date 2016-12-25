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
      </div>
    )
  }
}

export default VideoRouter
