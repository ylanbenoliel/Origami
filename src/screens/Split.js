import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components'
import DeviceContext from '../config/DeviceContext'

export default (props) => {
    const devices = useContext(DeviceContext)
    const totalDevices = devices.place
    return (
        <View>
            <Header />
            <Text>{totalDevices}</Text>
        </View>
    );

}

const styles = StyleSheet.create({

});