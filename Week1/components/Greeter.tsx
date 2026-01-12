import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Greeter( { username } :  { username: string}) {
  return (
    <View>
      <Text>Welcome here, { username } </Text>
    </View>
  )
}

const styles = StyleSheet.create({})