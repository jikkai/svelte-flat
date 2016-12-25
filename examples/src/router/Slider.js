import React from 'react'
import Slider from '../../../packages/slider/dist/index'
import '../../../packages/theme-default/dist/slider.css'

class SliderRouter extends React.Component {
  componentDidMount () {
    new Slider({
      target: document.querySelector('#slider1'),
      data: {
        min: 0,
        max: 100,
        value: 30
      }
    })
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
      </div>
    )
  }
}

export default SliderRouter
