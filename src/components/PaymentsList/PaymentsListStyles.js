import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
    fontSize: 18,
  },
  paymentSection: {
    paddingVertical: 5,
    backgroundColor: '#95cca2',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  payment: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  selectedPayment: {
    backgroundColor: '#a2c8cc',
  },
  selectedPaymentsContainer: {
    paddingVertical: 10,
  },
  selectedPaymentsText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
  },
  paymentText: {
    fontSize: 16,
    color: '#000',
  }
})
