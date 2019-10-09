import { SET_TEXT_DISPLAY, GET_TEXT_DISPLAY_PENDING } from './../actions'

const initialState = {
  textdisplay: 'React and Bootstrap',
  textPending: false
}

export const home = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT_DISPLAY_PENDING: {
      return { ...state, textPending: true }
    }
    case SET_TEXT_DISPLAY: {
      return { ...state, textdisplay: action.payload, textPending: false }
    }
    default:
      return state
  }
}