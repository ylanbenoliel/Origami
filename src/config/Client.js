import React, { useContext, useEffect, useState } from 'react'
import init from 'react_native_mqtt'
import { AsyncStorage } from 'react-native'
import { DeviceContext } from './Device'

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync: {},
});

const clientId = Math.floor(Math.random() * 1000) + 1
const client = new Paho.MQTT.Client('broker.mqttdashboard.com',
    8000, `${clientId}`)

export function Client(props) {
    const { devices, setDevices } = useContext(DeviceContext)

    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
        { onSuccess: onConnect, useSSL: false }
    )

    function onMessageArrived(message) {
        const changedDevice = devices.map(device => {
            if (device.topic === message.destinationName) {
                device.status = message.payloadString
            }
            return device
        })
    }

    function onConnect() {
        handleEnableDevices()
    }

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
        }
    }

    function handleEnableDevices() {
        const enableDevices = devices.map(device => {
            if (device.connected === false) {
                client.subscribe(`${device.topic}`)
                device.connected = true
            }
            return device
        })
        // setDevices({ enableDevices })
    }

    return (
        <>
        </>
    )
}

export default client