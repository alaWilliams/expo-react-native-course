import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function InputGreeter() {
  const [ name, setName ] = useState("")

  return (
    <View>
      <Text>Input Greeter</Text>
      <TextInput placeholder='Type your name here to be greeted' 
      onChangeText={name => setName(name)}></TextInput>

      <Text>Hello, {name}</Text>
    </View>

  )
}

const styles = StyleSheet.create({})