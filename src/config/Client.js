import React, { createContext, useState, useEffect, useContext } from 'react'
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

export const ClientContext = createContext({})

const clientId = Math.floor(Math.random() * 1000) + 1
const client = new Paho.MQTT.Client('broker.mqttdashboard.com',
    8000, `${clientId}`)

export default function Client({ children }) {
    const { globalDevices, setGlobalDevices } = useContext(DeviceContext)
    const [devices, setDevices] = useState(globalDevices)

    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
        { onSuccess: onConnect, useSSL: false }
    )

    async function onMessageArrived(message) {
        const changedDevice = devices.map(device => {
            if (device.topic === message.destinationName) {
                device.status = message.payloadString
            }
            return device
        })
        console.log(changedDevice)
        // await setDevices({ devices: changedDevice })
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
            client.subscribe(`${device.topic}`, { qos: 1 })
        })
        // setDevices({ devices: enableDevices })
    }

    return (
        <ClientContext.Provider value={{ devices, setDevices }}>
            {children}
        </ClientContext.Provider>
    )
}

export { client }