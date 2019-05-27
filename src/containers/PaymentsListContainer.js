import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PaymentsList from '../components/PaymentsList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { paymentsListSelector, paymentsRequestStateSelector } from '../store/payments/selectors'
import { paymentsFetchRequest } from '../store/actions'

class PaymentsListContainer extends Component {
  static propTypes = {
    paymentsFetchRequest: PropTypes.func,
    payments: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            value: PropTypes.string,
            comp: PropTypes.string,
            note: PropTypes.string,
          })
        )
      })
    ),
    paymentsFetchRequestState: PropTypes.shape({
      isError: PropTypes.bool,
      isSuccess: PropTypes.bool,
      isLoading: PropTypes.bool,
      errorMessage: PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedPayments: []
    }
  }

  componentDidMount () {
    const {paymentsFetchRequest} = this.props
    paymentsFetchRequest()
  }

  handleSelectPress = ( item ) => () => {
    const { selectedPayments } = this.state
    if (selectedPayments.includes(item.id)) {
      this.setState({ selectedPayments: selectedPayments.filter((i) => i !== item.id) })
    } else {
      this.setState({ selectedPayments: [...selectedPayments, item.id] })
    }
  }

  render () {
    const { payments, paymentsFetchRequestState } = this.props
    const { selectedPayments } = this.state

    return (
      <PaymentsList
        payments={payments}
        paymentsFetchRequestState={paymentsFetchRequestState}
        selectedPayments={selectedPayments}
        onSelectPress = {this.handleSelectPress}
      />
    )
  }
}


function mapStateToProps (state) {
  return {
    payments: paymentsListSelector()(state),
    paymentsFetchRequestState: paymentsRequestStateSelector()(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    paymentsFetchRequest,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsListContainer)
