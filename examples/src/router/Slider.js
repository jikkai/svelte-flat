import React from 'react'
import Slider from '../../../packages/slider/dist/index'
import '../../../packages/theme-default/dist/slider.css'

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
                <td>value</td>
                <td>值</td>
                <td>Number</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>min</td>
                <td>最小值</td>
                <td>Number</td>
                <td>-</td>
                <td>0</td>
              </tr>
              <tr>
                <td>max</td>
                <td>最大值</td>
                <td>Number</td>
                <td>-</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default SliderRouter
