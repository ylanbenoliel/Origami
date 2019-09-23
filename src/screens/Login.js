import React from 'react'
import { View, Button, TextInput } from 'react-native'

export default function Login(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title='Entrar'
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
    </View>
  )
}