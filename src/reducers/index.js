import {
  UPDATE
} from '../actions';

const appStates = (state = {
  text      : ""
}, action) => {
  switch (action.type) {
  	case UPDATE:
      return {
          ...state,
          text: action.string
      }
    default:
      return state
  }
}

export default appStates
