import reducer, { initialState } from '../../src/store/payments/reducer'
import {
  PAYMENTS_FETCH_REQUEST_PENDING,
  PAYMENTS_FETCH_REQUEST_FAILURE,
  PAYMENTS_FETCH_REQUEST_SUCCESS,
} from '../../src/store/payments/actions'
import {
  REQUEST_STATE_PENDING,
  REQUEST_STATE_FAILURE,
  REQUEST_STATE_SUCCESS,
} from '../../src/store/constants'
import { list } from '../../src/store/payments/data'

describe('payments reducer', () => {
  it('PAYMENTS_FETCH_REQUEST_PENDING', () => {
    const action = {
      type: PAYMENTS_FETCH_REQUEST_PENDING,
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      paymentsFetchRequestState: {
        ...REQUEST_STATE_PENDING,
      },
    })
  })
  it('REQUEST_STATE_FAILURE', () => {
    const action = {
      type: PAYMENTS_FETCH_REQUEST_FAILURE,
      errorMessage: 'Error'
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      paymentsFetchRequestState: {
        ...REQUEST_STATE_FAILURE,
        errorMessage: 'Error'
      },
    })
  })
  it('REQUEST_STATE_SUCCESS', () => {
    const action = {
      type: PAYMENTS_FETCH_REQUEST_SUCCESS,
      list
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      paymentsFetchRequestState: {
        ...REQUEST_STATE_SUCCESS,
      },
      list,
    })
  })
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
