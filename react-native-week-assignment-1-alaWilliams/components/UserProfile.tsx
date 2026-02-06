import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function UserProfile() {
  return (
    <View style={styles.userCard} >
      <Image source={require('../assets/christian-buehner-DItYlc26zVI-unsplash.jpg')} style={styles.userPhoto}/>
      <View style={styles.userInfo}>
        <Text testID='profileName' style={styles.userName}>John Crawford</Text>
        <Text testID='profileEmail' style={styles.userEmail}>John123@gmail.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    gap: 20
  },
  userPhoto: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  userInfo: {

  },
  userName: {
    fontSize: 17,
    fontWeight: 600,
    color: '#2D3748'
  },
  userEmail: {
    fontSize: 14,
    color: '#718096'

  }

})