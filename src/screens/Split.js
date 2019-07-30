import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../components'
import { DeviceContext } from '../config/Device'
import { ClientContext } from '../config/Client'

function Split() {
    const { devices, setDevices } = useContext(DeviceContext)
    console.log(devices)
    return (
        <View>
            <Header />
        </View>
    )
}
const styles = StyleSheet.create({

});
export default Split