import React from 'react'
import { SectionList, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import styles from './PaymentsListStyles'
import PropTypes from 'prop-types'

const PaymentsList = ({ payments, paymentsFetchRequestState, selectedPayments, onSelectPress }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={onSelectPress(item)}
      style={selectedPayments.includes(item.id) ? [styles.payment, styles.selectedPayment] : styles.payment}
    >
      <Text style={styles.paymentText}>{item.value}</Text>
      <Text style={styles.paymentText}>{item.comp}</Text>
      <Text style={styles.paymentText}>{item.note}</Text>
    </TouchableOpacity>
  )

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.paymentSection}>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
    </View>
  )

  const renderError = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.red}>{paymentsFetchRequestState.errorMessage}</Text>
    </View>
  )

  const renderContent = () => (
    <React.Fragment>
      <View style={styles.selectedPaymentsContainer}>
        <Text style={styles.selectedPaymentsText}>Выбрано: {selectedPayments.length}</Text>
      </View>
      <SectionList
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={payments}
        keyExtractor={(item) => item.id}
      />
    </React.Fragment>
  )

  return (
    <SafeAreaView style={styles.container}>
      {
        paymentsFetchRequestState.isLoading
          ? <ActivityIndicator size='large' color='#0000ff' />
          : paymentsFetchRequestState.isSuccess && !paymentsFetchRequestState.errorMessage
            ? renderContent()
            : renderError()
      }
    </SafeAreaView>
  )
}

PaymentsList.propTypes = {
  selectedPayments: PropTypes.arrayOf(PropTypes.string),
  onSelectPress: PropTypes.func
};

export default PaymentsList
