import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Start from '../views/Start.js'

const views = {
  start: Start,
}

const mapStateToProps = (state) => ({
  view: state.view,
})

@connect(mapStateToProps)
export default class RouterContainer extends React.Component {
  render () {
    const View = views[this.props.view]

    // view not found
    if (!View) return <div>View &quot;{this.props.view}&quot; not found!</div>

    // display view
    return <View/>
  }

  static propTypes = {}
}
