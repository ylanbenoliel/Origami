import React, { Component, useContext, useState, useEffect } from 'react'
import {
	AsyncStorage,
	StyleSheet,
	View,
	FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../config/commonStyles'
import { Header, AddDevice } from '../components'
import OnOff from '../components/OnOff'
import { DeviceContext } from '../config/Device'
import init from 'react_native_mqtt'

init({
	size: 10000,
	storageBackend: AsyncStorage,
	defaultExpires: 1000 * 3600 * 24,
	enableCache: true,
	sync: {},
});

export default function Light(props) {
	const { globalDevices, setGlobalDevices } = useContext(DeviceContext)
	const clientId = Math.floor(Math.random() * 1000) + 1
	const client = new Paho.MQTT.Client('broker.mqttdashboard.com',
		8000, `${clientId}`)

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

	function toggleStatusDevice(id) {
		const toggledDevice = globalDevices.map(device => {
			if (device.id === id) {
				// client.publish(`${device.topic}`, 't')
				if (device.status === '1') client.publish(`${device.topic}`, '0')
				if (device.status === '0') client.publish(`${device.topic}`, '1')
			}
			return device
		})
		setGlobalDevices(toggledDevice)
	}

	function deleteDevice(id) {
		const remainDevices = globalDevices.filter(device => device.id !== id)
		setGlobalDevices(remainDevices)
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.deviceContainer}>
				{client && (
					<FlatList data={globalDevices} numColumns={2}
						keyExtractor={item => item.id} renderItem={({ item }) =>
							<OnOff {...item} onToggleStatusDevice={toggleStatusDevice}
								onDelete={deleteDevice} />}
					/>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'flex-end',
		paddingTop: 5,
		paddingRight: 10,

	},
	deviceContainer: {
		flex: 9,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		paddingVertical: 5
	},
})