import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getUrlServer } from './../helpers/getUrlServer'
import { FETCH_TEXT_SUCCESS, FETCH_TEXT_REQUEST } from '../actions'
import { fetchTextFromServer } from '../actions'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TEXT_SUCCESS when fetching todos has been done', () => {
    fetchMock.postOnce(getUrlServer(), {
      body: { text: 'test' },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: FETCH_TEXT_REQUEST },
      { type: FETCH_TEXT_SUCCESS, payload: 'test' }
    ]
    const store = mockStore({ text: 'React Redux' })

    return store.dispatch(fetchTextFromServer()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})