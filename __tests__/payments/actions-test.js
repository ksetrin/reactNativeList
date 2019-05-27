import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import {
  PAYMENTS_FETCH_REQUEST_PENDING,
  PAYMENTS_FETCH_REQUEST_FAILURE,
  PAYMENTS_FETCH_REQUEST_SUCCESS,
  paymentsFetchRequest
} from '../../src/store/payments/actions'
import { list } from '../../src/store/payments/data'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('payments actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('paymentsFetchRequest success', () => {
    jest.useFakeTimers();
    fetchMock.getOnce(`http://localhost/payments`, {
      headers: { 'content-type': 'application/json' },
      body: { data: list, status: 'ok' },
    })
    const store = mockStore({})
    const expectedActions = [
      {
        type: PAYMENTS_FETCH_REQUEST_PENDING,
      },
      {
        type: PAYMENTS_FETCH_REQUEST_SUCCESS,
        list,
      },
    ]
    return store.dispatch(paymentsFetchRequest()).then(() => {
      jest.runAllTimers();
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
