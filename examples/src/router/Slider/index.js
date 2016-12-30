import React from 'react'

import Docs from 'sf/slider/README.md'
import Slider from 'sf/slider/dist/index'
import 'sf/theme-default/dist/slider.css'

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
        <h2>Slider 滑块</h2>

        <section className="examples">
          <h3>基础滑块</h3>

          <div>
            <div id="slider1"></div>
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

export default SliderRouter
