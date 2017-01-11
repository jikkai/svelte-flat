import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/audio/README.md'
import Audio from 'sf/audio/lib'
import mp3 from 'root/assets/demo.mp3'

import Examples from './examples.md'
import './style.css'

class AudioRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      audio: [
        { src: mp3, loop: false }
      ]
    }
  }

  componentDidMount () {
    const { audio } = this.state
    for (let i = 0; i < audio.length; i++) {
      Audio({
        target: document.querySelector(`#audio${i + 1}`),
        data: audio[i]
      })
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-audio">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default AudioRouter
