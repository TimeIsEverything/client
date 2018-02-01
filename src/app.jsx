import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './config/redux.js'

import Router from './containers/Router.js'

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('app')
)
