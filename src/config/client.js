import React from 'react'
import init from 'react_native_mqtt'
import { AsyncStorage } from 'react-native'

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync: {},
});

const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, `uname`)
client.onConnectionLost = onConnectionLost
client.onMessageArrived = onMessageArrived
client.connect(
    { onSuccess: onConnect, useSSL: false }
)

function onConnect() {
}

function onMessageArrived(message) {
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
    }
}

export {
    client,
}