import React, { Component } from 'react'

class Landing extends Component {
  constructor() {
    super()
    this.state = { videoUrl: 'https://www.youtube.com/embed/lRTtMcx6rSM' }
  }
  render() {
    return (
      <div id='landing'>
        <div id='landingBox'>Landing Page hello!</div>
      </div>
    )
  }
}

export default Landing
