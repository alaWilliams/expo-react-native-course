import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import SuccessMessage from './SuccessMessage'
import UserProfile from './UserProfile'
import ConfirmationInfo from './ConfirmationInfo'

export default function TransactionConfirmation() {
  return (
    <View style={styles.container} testID='paymentSuccessScreen'>
      <View style={styles.card}>
        <SuccessMessage />
        <UserProfile/>
        <View style={styles.line}></View>
        <ConfirmationInfo />

        <LinearGradient testID='continueButton' style={styles.button} colors={['#5F9B9E', '#c98338ff']} start={{x: 0.5, y: 1}} end={{x: 0.24, y: 0.2}}
>
          <Text style={styles.buttonText} testID='buttonText'>Continue</Text>
        </LinearGradient>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9B9E',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    height: '70%',
    borderRadius: 7,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 8,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#b9b9b9ff',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  button: {
    width: '90%',
    backgroundColor: '#5F9B9E',
    alignSelf: 'center',
    height: 42,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 600
  }
})