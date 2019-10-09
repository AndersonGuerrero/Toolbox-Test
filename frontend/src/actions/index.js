import { getUrlServerText } from './../helpers/getUrlServerText'

export const SET_TEXT_DISPLAY = 'SET_TEXT_DISPLAY'
export const GET_TEXT_DISPLAY_PENDING = 'GET_TEXT_DISPLAY_PENDING'

const setTextDisplayPending = payload => ({
  type: GET_TEXT_DISPLAY_PENDING,
  payload
})
const setTextDisplay = payload => ({ type: SET_TEXT_DISPLAY, payload })

export const getTextFromServer = payload => {
  return (dispatch, getState) => {
    dispatch(setTextDisplayPending())
    const data = { text: payload }
    return fetch(getUrlServerText(payload), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(dataResponse => {
        return dataResponse.json()
      })
      .then(server_data => {
        dispatch(setTextDisplay(server_data.text))
      })
      .catch(error => {
        dispatch(setTextDisplay('Servidor no disponible'))
      })
  }
}