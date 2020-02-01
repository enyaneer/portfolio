import React, { Component } from 'react'

class Landing extends Component {
  constructor() {
    super()
    this.state = { videoUrl: 'https://www.youtube.com/embed/lRTtMcx6rSM' }
  }
  render() {
    return (
      <div>
        Landing Page hello!
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */,
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            id='background-vid'
            loop
            autoPlay
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
            }}
            src={this.state.videoUrl}
            frameBorder='0'
          />
        </div>
      </div>
    )
  }
}

export default Landing
