import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers/'

const middleware = applyMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(
    middleware,
  )
)

export default store
