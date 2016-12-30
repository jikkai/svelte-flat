import React from 'react'

import Docs from 'sf/video/README.md'
import Video from 'sf/video/dist/index'
import 'sf/theme-default/dist/video.css'
import mp4 from 'root/assets/demo.mp4'

import Examples from './examples.md'
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
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default VideoRouter
