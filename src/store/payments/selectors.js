import { createSelector } from 'reselect'

export const paymentsSelector = () => (state) => {
  return state.payments
}

export const paymentsListSelector = () => createSelector(
  paymentsSelector(),
  (payments) => payments.list || []
)

export const paymentsRequestStateSelector = () => createSelector(
  paymentsSelector(),
  (payments) => payments.paymentsFetchRequestState || {}
)
