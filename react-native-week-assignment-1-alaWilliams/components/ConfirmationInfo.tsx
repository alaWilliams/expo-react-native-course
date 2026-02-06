import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ConfirmationInfo() {
  return (
    <View style={styles.box}>
      <Text style={styles.text} testID='transactionDate'>Transaction done on 12 January 2018.</Text>
      <Text style={styles.text}>your reference number is <Text testID='referenceNumber' style={styles.text}>03492390</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    color: '#A0AEC0',
  },
  text: {
    color: '#A0AEC0',
    fontSize: 13
  }
})