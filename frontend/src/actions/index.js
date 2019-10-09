import { getUrlServer } from './../helpers/getUrlServer'

export const FETCH_TEXT_SUCCESS = 'FETCH_TEXT_SUCCESS'
export const FETCH_TEXT_REQUEST = 'FETCH_TEXT_REQUEST'

const fetchTextRequest = payload => ({
  type: FETCH_TEXT_REQUEST,
  payload
})
const fetchTextSuccess = payload => ({ type: FETCH_TEXT_SUCCESS, payload })

export const fetchTextFromServer = payload => {
  return (dispatch, getState) => {
    dispatch(fetchTextRequest())
    const data = { text: payload }
    return fetch(getUrlServer(), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(body => dispatch(fetchTextSuccess(body.text)))
      .catch(error => dispatch(fetchTextSuccess('Servidor no disponible')))
  }
}