import React from 'react'

import Docs from 'sf/video/README.md'
import Video from 'sf/video/dist/index'
import 'sf/theme-default/dist/video.css'
import mp4 from 'root/assets/demo.mp4'

import './style.css'

class VideoRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: [
        { src: mp4, width: 620, height: 350, loop: false }
      ]
    }
  }

  componentDidMount () {
    const { video } = this.state
    for (let i = 0; i < video.length; i++) {
      new Video({
        target: document.querySelector(`#video${i + 1}`),
        data: video[i]
      })
    }
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

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default VideoRouter
