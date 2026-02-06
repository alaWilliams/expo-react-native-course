import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SuccessMessage() {
  return (
    <View style={styles.successMessage}>
      <View style={styles.icon}></View>
      <Text testID='successMessage' style={styles.successText}>Sent successfully to Lela Crawford</Text>
      <Text testID='amountText' style={styles.amount}>$100.00</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  successMessage: {
    alignItems: 'center',
    paddingTop: 90,
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#d5aa8afe',
    marginBottom: 10
  },
  successText: {
    fontSize: 15,
    color: '#718096',

  },
  amount: {
    color: '#2C7A7B',
    fontWeight: 700,
    fontSize: 48,
    marginTop: 20,
    marginBottom: 20
  }
  })