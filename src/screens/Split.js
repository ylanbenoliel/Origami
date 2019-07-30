import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../components'
import DeviceContext from '../config/Device'

export default function Split() {
    const x = useContext(DeviceContext)
    console.log(x)
    return (
        <View>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({

});