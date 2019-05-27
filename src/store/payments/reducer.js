import {
  REQUEST_STATE_PENDING,
  REQUEST_STATE_FAILURE,
  REQUEST_STATE_SUCCESS,
} from '../constants'
import {
  PAYMENTS_FETCH_REQUEST_PENDING,
  PAYMENTS_FETCH_REQUEST_FAILURE,
  PAYMENTS_FETCH_REQUEST_SUCCESS,
} from './actions'

export const initialState = {
  list: [],
  paymentsFetchRequestState: {}
}

const mutations = {
  [PAYMENTS_FETCH_REQUEST_PENDING] (state) {
    return {
      ...state,
      paymentsFetchRequestState: {
        ...REQUEST_STATE_PENDING,
      },
    }
  },
  [PAYMENTS_FETCH_REQUEST_SUCCESS] (state, { list }) {
    return {
      ...state,
      paymentsFetchRequestState: {
        ...REQUEST_STATE_SUCCESS,
      },
      list,
    }
  },
  [PAYMENTS_FETCH_REQUEST_FAILURE] (state, { errorMessage }) {
    return {
      ...state,
      paymentsFetchRequestState: {
        ...REQUEST_STATE_FAILURE,
        errorMessage,
      },
    }
  },
}

export default (state = initialState, { type, ...other }) => {
  return (type in mutations)
    ? mutations[type](state, other)
    : state
}
