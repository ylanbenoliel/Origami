import React, { createContext, useContext, useState } from 'react'
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

function Client({ children }) {
    const { devices, setDevices } = useContext(DeviceContext)
    const clientId = Math.floor(Math.random() * 1000) + 1

    const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, `${clientId}`)
    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
        { onSuccess: onConnect, useSSL: false }
    )

    function onConnect() {
        enableDevices()
    }

    function onMessageArrived(message) {
        console.log(message)
    }

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
        }
    }

    function enableDevices() {
        for (let i = 0; i < devices.length; i++) {
            client.subscribe(`${devices[i].topic}`)
            console.log(`Conectado à ${devices[i].topic}`)
        }
    }

    return (
        <ClientContext.Provider
            value={{ client }}>
            {children}
        </ClientContext.Provider>
    )
}

export default Client



// const clientId = Math.floor(Math.random() * 1000) + 1

// const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, `${clientId}`)
// client.onConnectionLost = onConnectionLost
// client.onMessageArrived = onMessageArrived
// client.connect(
//     { onSuccess: onConnect, useSSL: false }
// )
// export default function Client() {
//     const storedDevices = useContext(DeviceContext)
//     const [devices, setDevices] = useState(storedDevices)
//     console.log(devices)

// }

// function onConnect() {
// }

// function onMessageArrived(message) {
//     console.log(message)
// }

// function onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//     }
// }

// export {
//     client
// }