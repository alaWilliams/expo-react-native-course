import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MoveTheBall() {
  return (
    <View style={styles.container}>
      <Text>Move The Ball</Text>
      <View style={styles.ball}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9e9797ff',
    height: 100
  },
  ball: {
    backgroundColor: '#8f1d1dff',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})