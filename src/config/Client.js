import React, { createContext, useState, useContext } from 'react'
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

export default function Client(props) {
    const { globalDevices, setGlobalDevices } = useContext(DeviceContext)
    const [devices, setDevices] = useState(globalDevices)

    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
        { onSuccess: onConnect, useSSL: false }
    )

    function onMessageArrived(message) {
        const changedDevice = globalDevices.map(device => {
            if (device.topic === message.destinationName) {
                // console.log(message.payloadString)
                device.status = message.payloadString
            }
            return device
        })
        setGlobalDevices(changedDevice)
    }

    function onConnect() {
        handleEnableDevices()
    }

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
        }
    }

    function handleEnableDevices() {
        for (let i = 0; i < globalDevices.length; i++) {
            client.subscribe(`${globalDevices[i].topic}`)
        }
    }

    return (
        // <>
        // </>
        <ClientContext.Provider value={{ devices, setDevices }}>
            {props.children}
        </ClientContext.Provider>
    )
}

export { client }