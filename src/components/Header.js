import React from 'react'
import { View, Image, Platform, StyleSheet, StatusBar } from 'react-native'
import logo from '../assets/logocopia.png'

export function Header (props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <View style={styles.rowContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#BBB'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo: {
    alignItems: 'center',
    width: 50,
    height: 40,
    resizeMode: 'contain'
  }
})
