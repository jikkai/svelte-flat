import React from 'react'

class ColorRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: [
        { name: 'TURQUOISE', value: '#1ABC9C' },
        { name: 'GREEN SEA', value: '#16A085' },
        { name: 'EMERALD', value: '#2ECC71' },
        { name: 'NEPHRITIS', value: '#27AE60' },
        { name: 'PETER RIVER', value: '#3498DB' },
        { name: 'BELIZE HOLE', value: '#2980B9' },
        { name: 'AMETHYST', value: '#9B59B6' },
        { name: 'WISTERIA', value: '#8E44AD' },
        { name: 'WET ASPHALT', value: '#34495E' },
        { name: 'MIDNIGHT BLUE', value: '#2C3E50' },
        { name: 'SUN FLOWER', value: '#F1C40F' },
        { name: 'ORANGE', value: '#F39C12' },
        { name: 'CARROT', value: '#E67E22' },
        { name: 'PUMPKIN', value: '#D35400' },
        { name: 'ALIZARIN', value: '#E74C3C' },
        { name: 'POMEGRANATE', value: '#C0392B' },
        { name: 'CLOUDS', value: '#ECF0F1' },
        { name: 'SILVER', value: '#BDC3C7' },
        { name: 'CONCRETE', value: '#95A5A6' },
        { name: 'ASBESTOS', value: '#7F8C8D' }
      ]
    }
  }

  render () {
    const { color } = this.state
    return (
      <div className="examples-router examples-router-color">
        <h2>Color 色彩</h2>

        <section className="examples">
          <h3>配色</h3>
          <div>
            {
              color.map((item, i) => {
                return (
                  <dl key={i} style={{background: item.value}}>
                    <dt>{item.value}</dt>
                    <dt>{item.name}</dt>
                  </dl>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export default ColorRouter
