import React from 'react'
import PaymentsListContainer from '../../src/containers/PaymentsListContainer'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../src/store'

describe('PaymentsListContainer', () => {
  it('PaymentsListContainer renders correctly', () => {
    renderer.create(
      <Provider store={store}>
        <PaymentsListContainer />
      </Provider>
    );
  });
})

