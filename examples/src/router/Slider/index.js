import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/slider/README.md'
import Slider from 'sf/slider/lib'

import Examples from './examples.md'
import './style.css'

class SliderRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slider: [
        { value: 30, min: 0, max: 100 }
      ]
    }
  }

  componentDidMount () {
    const { slider } = this.state
    for (let i = 0; i < slider.length; i++) {
      new Slider({
        target: document.querySelector(`#slider${i + 1}`),
        data: slider[i]
      })
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-slider">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default SliderRouter
