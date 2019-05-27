import React from 'react'
import PaymentsListContainer from '../../../src/containers/PaymentsListContainer'
import PaymentsList from '../../../src/components/PaymentsList/PaymentsList'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../../src/store'

describe('PaymentsList', () => {
  it('PaymentsList renders correctly', () => {
    renderer.create(
      <Provider store={store}>
        <PaymentsListContainer>
          <PaymentsList />
        </PaymentsListContainer>
      </Provider>
    )
  })
})

