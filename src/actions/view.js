import {CHANGE_VIEW} from '../actions/types.js'

export const changeView = (newView) => ({
  action: CHANGE_VIEW,
  payload: newView,
})
