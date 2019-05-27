import React, {Component} from 'react';
import store from './store'
import { Provider } from 'react-redux'
import PaymentsListContainer from './containers/PaymentsListContainer'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <PaymentsListContainer />
      </Provider>
    );
  }
}
