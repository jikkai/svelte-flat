import React from 'react'

import Image from 'root/assets/demo.jpg'

import './style.css'

class TypographyRouter extends React.Component {
  render () {
    return (
      <div className="examples-router examples-router-typography">
        <h2>Typography 排版</h2>

        <section className="examples">
          <div>
            <label>Header 1</label>
            <h1 className="typography-right">Showers across the W</h1>
          </div>

          <div>
            <label>Header 2</label>
            <h2 className="typography-right">Give this quartet a few</h2>
          </div>

          <div>
            <label>Header 3</label>
            <h3 className="typography-right">The Vatican transitions to a</h3>
          </div>

          <div>
            <label>Header 4</label>
            <h4 className="typography-right">Great American Bites: Telluride's Oak, The</h4>
          </div>

          <div>
            <label>Header 5</label>
            <h5 className="typography-right">Author Diane Alberts loves her some good</h5>
          </div>

          <div>
            <label>Header 6</label>
            <h6 className="typography-right">With the success of young-adult book-to-movie</h6>
          </div>

          <div>
            <label>Paragraph</label>
            <p className="typography-right">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.
              <strong>Duis mollis</strong>, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit.
            </p>
          </div>

          <div>
            <label>Image</label>
            <img className="typography-right img-rounded" src={Image} />
          </div>
        </section>
      </div>
    )
  }
}

export default TypographyRouter
