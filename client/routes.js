import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Landing from './components/landing'

class Routes extends Component {
  render() {
    return <Route exact path='/' component={Landing} />
  }
}

export default Routes
