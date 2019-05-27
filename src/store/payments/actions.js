export const PAYMENTS_FETCH_REQUEST_PENDING = 'payments/fetch/request/pending'
export const PAYMENTS_FETCH_REQUEST_SUCCESS = 'payments/fetch/request/success'
export const PAYMENTS_FETCH_REQUEST_FAILURE = 'payments/fetch/request/failure'
import { list } from './data'

export const paymentsFetchRequest = () => async (dispatch) => {
  dispatch({ type: PAYMENTS_FETCH_REQUEST_PENDING })
  try {
    setTimeout(()=> dispatch({ type: PAYMENTS_FETCH_REQUEST_SUCCESS, list }), 2000)
  } catch (error) {
    dispatch({ type: PAYMENTS_FETCH_REQUEST_FAILURE, errorMessage: error.message })
  }
}
