import React from 'react'

import Docs from 'sf/slider/README.md'
import Slider from 'sf/slider/dist/index'
import 'sf/theme-default/dist/slider.css'

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
