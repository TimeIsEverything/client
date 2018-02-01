import {CHANGE_VIEW} from '../../actions/types.js'

const initial = 'start'

export default (view = initial, action) => {
  switch (action.type) {
    case CHANGE_VIEW: {
      return action.payload
    }
    default: {
      return view
    }
  }
}
