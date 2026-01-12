import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import carImage from '../assets/carImage.jpg'

export default function DisplayAnImage() {
  return (
    <View>
      <Image style={{width: 200, height: 200}} source={{
      uri: 'https://plus.unsplash.com/premium_photo-1669868119012-f5ea10b9d3f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}}></Image>
    <View style={{width: 200, height: 200}} source={carImage}></View>


    </View>

  )
}

const styles = StyleSheet.create({})