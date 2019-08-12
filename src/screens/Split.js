import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../components'
import { DeviceContext } from '../config/Device'
import client from '../config/Client'

function Split(props) {
    function command() {
        client.publish('so/sala', '1')
    }
    return (
        <TouchableOpacity onPress={command}>
            <Text>Ola, tudo bem?</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

});
export default Split