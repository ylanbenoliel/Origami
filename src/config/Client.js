import React, { createContext, useState, useEffect } from 'react'
import init from 'react_native_mqtt'
import { AsyncStorage } from 'react-native'
import { DeviceContext } from './Device'

import data from '../services/device'

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync: {},
});

export const ClientContext = createContext({})

const clientId = Math.floor(Math.random() * 1000) + 1
const client = new Paho.MQTT.Client('broker.mqttdashboard.com',
    8000, `${clientId}`)

export function Client({ children }) {
    const [devices, setDevices] = useState(data)

    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
        { onSuccess: onConnect, useSSL: false }
    )

    setTimeout(() => {
        //teste para ver se os devices funcionam apos serem apagados
        setDevices({ devices: '' })
    }, 4000)

    function onMessageArrived(message) {
        console.clear()
        const changedDevice = devices.map(device => {
            if (device.topic === message.destinationName) {
                device.status = message.payloadString
            }
            return device
        })
        console.table(changedDevice)
        // setDevices({ devices: [...changedDevice] })
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
                client.subscribe(`${device.topic}`, { qos: 1 })
                device.connected = true
            }
        })
        // setDevices({ devices: enableDevices })
    }

    return (
        <ClientContext.Provider value={{ devices, setDevices }}>
            {children}
        </ClientContext.Provider>
    )
}

export default client