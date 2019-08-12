import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../components'
import { DeviceContext } from '../config/Device'
import client from '../config/Client'

function Split(props) {
    function command() {
        client.publish('so/quarto', '1')
    }
    return (
        <TouchableOpacity onPress={command}>
            <Text>Enviando quarto 1</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

});
export default Split