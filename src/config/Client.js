import React, { createContext, useContext, useEffect, useState } from 'react'
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

/* Exportar a variável client diretamente ao invés de utilizar como provider
1º implementação consegue recuperar devices, porem altera o estado client
2ª implementação consegue passar o client entre telas, porem nao recebe os devices
*/

// export const ClientContext = createContext({})

// function Client({ children }) {
//     const { devices, setDevices } = useContext(DeviceContext)

//     const clientId = Math.floor(Math.random() * 1000) + 1
//     const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000,
//         `${clientId}`)
//     client.onConnectionLost = onConnectionLost
//     client.onMessageArrived = onMessageArrived
//     client.connect(
//         { onSuccess: onConnect, useSSL: false }
//     )

//     function onConnect() {
//         handleEnableDevices()
//     }

//     function onMessageArrived(message) {
//         const changedDevice = devices.map(device => {
//             if (device.topic === message.destinationName) {
//                 device.status = message.payloadString
//             }
//             return device
//         })
//         setDevices({ devices: changedDevice })
//         console.log(devices)
//     }

//     function onConnectionLost(responseObject) {
//         if (responseObject.errorCode !== 0) {
//         }
//     }

//     function handleEnableDevices() {
//         const enableDevices = devices.map(device => {
//             if (device.connected === false) {
//                 client.subscribe(`${device.topic}`)
//                 device.connected = true
//                 // console.log(`Conectado à ${device.topic}`)
//             }
//             return device
//         })
//         setDevices({ devices: enableDevices })
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             client.publish('so/quarto', '1')
//             console.log(client)
//         }, 3000);
//     }, [])

//     return (
//         // <>
//         // </>
//         <ClientContext.Provider
//             value={{ client }}
//         >
//             {children}
//         </ClientContext.Provider>
//     )
// }
// export default Client




// const clientId = Math.floor(Math.random() * 1000) + 1

// const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, `${clientId}`)
// client.onConnectionLost = onConnectionLost
// client.onMessageArrived = onMessageArrived
// client.connect(
//     { onSuccess: onConnect, useSSL: false }
// )
// export default function Client() {
//     const { devices, setDevices } = useContext(DeviceContext)
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

const clientId = Math.floor(Math.random() * 1000) + 1
const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, `${clientId}`)

export function Client(props) {
    const { devices, setDevices } = useContext(DeviceContext)

    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
        { onSuccess: onConnect, useSSL: false }
    )


    function onConnect() {
        client.subscribe('so/sala')
    }

    function onMessageArrived(message) {
        console.log(message.payloadString)
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
                // console.log(`Conectado à ${device.topic}`)
            }
            return device
        })
        setDevices({ devices: enableDevices })
    }

    return (
        <>
        </>
    )
}

export default client