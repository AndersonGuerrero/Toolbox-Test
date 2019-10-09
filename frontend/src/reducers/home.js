import { FETCH_TEXT_SUCCESS, FETCH_TEXT_REQUEST } from './../actions'

const initialState = {
  textdisplay: 'React and Bootstrap',
  textPending: false
}

export const home = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEXT_REQUEST: {
      return { ...state, textPending: true }
    }
    case FETCH_TEXT_SUCCESS: {
      return { ...state, textdisplay: action.payload, textPending: false }
    }
    default:
      return state
  }
}