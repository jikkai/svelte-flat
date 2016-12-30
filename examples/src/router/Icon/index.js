import React from 'react'
import hljs from 'highlightjs'

import Examples from './examples.md'
import 'sf/theme-default/dist/icon.css'
import './style.css'

class IconRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      icon: {
        glyphs: [
          'fui-info-circle', 'fui-alert-circle', 'fui-question-circle', 'fui-check-circle',
          'fui-cross-circle', 'fui-plus-circle', 'fui-window', 'fui-windows', 'fui-upload',
          'fui-arrow-right', 'fui-arrow-left', 'fui-loop', 'fui-cmd', 'fui-mic', 'fui-export',
          'fui-heart', 'fui-location', 'fui-plus', 'fui-check', 'fui-cross', 'fui-list',
          'fui-new', 'fui-video', 'fui-photo', 'fui-time', 'fui-eye', 'fui-chat', 'fui-home',
          'fui-search', 'fui-user', 'fui-mail', 'fui-lock', 'fui-power', 'fui-star',
          'fui-calendar', 'fui-gear', 'fui-bookmark', 'fui-exit', 'fui-trash', 'fui-folder',
          'fui-bubble', 'fui-calendar-solid', 'fui-star-2', 'fui-credit-card', 'fui-clip',
          'fui-link', 'fui-pause', 'fui-play', 'fui-volume', 'fui-mute', 'fui-resize', 'fui-tag',
          'fui-document', 'fui-image', 'fui-triangle-up', 'fui-triangle-up-small',
          'fui-triangle-right-large', 'fui-triangle-left-large', 'fui-triangle-down',
          'fui-triangle-down-small', 'fui-radio-unchecked', 'fui-radio-checked',
          'fui-checkbox-unchecked', 'fui-checkbox-checked', 'fui-list-thumbnailed',
          'fui-list-small-thumbnails', 'fui-list-numbered', 'fui-list-large-thumbnails',
          'fui-list-columned', 'fui-list-bulleted'
        ],
        social: [
          'fui-facebook', 'fui-youtube', 'fui-vimeo', 'fui-twitter',
          'fui-stumbleupon', 'fui-spotify', 'fui-skype', 'fui-pinterest',
          'fui-path', 'fui-linkedin', 'fui-google-plus', 'fui-dribbble',
          'fui-behance', 'fui-yelp', 'fui-wordpress', 'fui-windows-8', 'fui-vine',
          'fui-tumblr', 'fui-paypal', 'fui-lastfm', 'fui-instagram', 'fui-html5',
          'fui-github', 'fui-foursquare', 'fui-dropbox', 'fui-android', 'fui-apple'
        ]
      }
    }
  }

  componentDidMount () {
    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    const { icon } = this.state

    return (
      <div className="examples-router examples-router-icon">
        <div dangerouslySetInnerHTML={{ __html: Examples }} />

        <section className="example">
          <h3>Glyphs ({icon.glyphs.length})</h3>
          <div className="example-icon">
            {
              icon.glyphs.map((item, i) => {
                return (
                  <div key={i}>
                    <i className={item}></i>
                    <span>{item}</span>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className="example">
          <h3>Social ({icon.social.length})</h3>
          <div className="example-icon">
            {
              icon.social.map((item, i) => {
                return (
                  <div key={i}>
                    <i className={item}></i>
                    <span>{item}</span>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export default IconRouter
