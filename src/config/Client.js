import React, { createContext, useState, useEffect, useContext } from 'react'
import init from 'react_native_mqtt'
import { AsyncStorage } from 'react-native'
import { DeviceContext } from './Device'

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {}
})

export const ClientContext = createContext({})

export default function Client (props) {
  const { globalDevices, setGlobalDevices } = useContext(DeviceContext)
  const clientId = Math.floor(Math.random() * 10000) + 1
  const [client, setClient] =
    useState(new Paho.MQTT.Client('broker.mqttdashboard.com', Number(8000), `${clientId}`)) //eslint-disable-line

  useEffect(() => {
    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect(
      { onSuccess: onConnect, useSSL: false }
    )
  }, [])

  function onMessageArrived (message) {
    const changedDevice = globalDevices.map(device => {
      if (message.payloadString === 't') return device

      if (device.topic === message.destinationName) {
        device.status = message.payloadString
      }
      return device
    })
    setGlobalDevices(changedDevice)
  }

  function onConnect () {
    handleEnableDevices()
  }

  function onConnectionLost (responseObject) {
    if (responseObject.errorCode !== 0) {
    }
  }

  function handleEnableDevices () {
    const enableDevices = globalDevices.map(device => {
      if (device.type !== 'onoff') return device

      client.subscribe(`${device.topic}`)
      return device
    })
    setGlobalDevices(enableDevices)
  }

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {props.children}
    </ClientContext.Provider>
  )
}

// export { client }
