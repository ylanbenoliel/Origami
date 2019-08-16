import React, { Component, useContext, useState, useEffect } from 'react'
import { AsyncStorage, StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native'
import { client } from '../config/Client'
import Icon from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../config/commonStyles'
import { Header, AddDevice } from '../components'
import OnOff from '../components/OnOff'
import { ClientContext } from '../config/Client'

export default function Light(props) {
	const { devices, setDevices } = useContext(ClientContext)

	function toggleStatusDevice(id) {
		const toggledDevice = devices.map(device => {
			if (device.id === id) {
				// client.publish(`${device.topic}`, 't')
				if (device.status === '1') client.publish(`${device.topic}`, '0')
				if (device.status === '0') client.publish(`${device.topic}`, '1')
			}
			// return device
		})
		// setDevices({ devices: toggledDevice })
	}

	function deleteDevice(id) {
		const remainDevices = devices.filter(device => device.id !== id)
		// setDevices({ devices: remainDevices })
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.deviceContainer}>
				<FlatList data={devices} numColumns={2}
					keyExtractor={item => item.id} renderItem={({ item }) =>
						<OnOff {...item} onToggleStatusDevice={toggleStatusDevice}
							onDelete={deleteDevice} />}
				/>
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

// export default class Light extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			client: client,
// 			devices: data,
// 			showAddDevice: false,
// 		}
// 		// setTimeout(() => this.getStoredDevices(), 1500)
// 	}

// 	enableDevice = () => {
// 		const { client, devices } = this.state
// 		for (let i = 0; i < devices.length; i++) {
// 			client.subscribe(`${devices[i].topic}`)
// 			// client.publish(`${device[i].topic}`, 's')
// 		}
// 	}

// 	toggleStatusDevice = id => {
// 		const { client } = this.state
// 		const devices = this.state.devices.map(device => {
// 			if (device.id === id) {
// 				client.publish(`${device.topic}`, 't')
// 				// if (device.status === '1') client.publish(`${device.topic}`, '0')
// 				// if (device.status === '0') client.publish(`${device.topic}`, '1')
// 			}
// 			return device
// 		})
// 		this.setState({ devices })
// 	}

// 	getStoredDevices = async () => {
// 		try {
// 			const data = await AsyncStorage.getItem(this.props.screen)
// 			const storedDevices = JSON.parse(data) || []
// 			this.setState({ devices: storedDevices }, this.enableDevice)
// 		} catch (error) {

// 		}
// 	}

// 	storeDevices = async () => {
// 		try {
// 			await AsyncStorage.setItem(this.props.screen, JSON.stringify(this.state.devices))
// 		} catch (error) {

// 		}
// 	}

// 	addDevice = async device => {
// 		const devices = [...this.state.devices]
// 		devices.push({
// 			id: Math.random(),
// 			topic: device.topic.trim().toLowerCase(),
// 			status: '0',
// 			place: device.place.trim().toLowerCase(),
// 			type: device.type.trim().toLowerCase(),
// 		})
// 		await this.setState({ devices, showAddDevice: false }, this.enableDevice)
// 		await this.storeDevices()
// 	}

// 	deleteDevice = id => {
// 		const remainDevices = this.state.devices.filter(device => device.id !== id)
// 		this.setState({ devices: remainDevices }, this.storeDevices)
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Header />

// 				<TouchableOpacity style={styles.header}
// 					onPress={() => this.setState({ showAddDevice: true })}>
// 					<Icon name='add' color={commonStyles.colors.primary} size={25} />
// 				</TouchableOpacity>

// 				<AddDevice isVisible={this.state.showAddDevice} onSave={this.addDevice}
// 					onCancel={() => this.setState({ showAddDevice: false })} />

// 				<View style={styles.deviceContainer}>
// 					<FlatList data={this.state.devices} numColumns={2}
// 						keyExtractor={item => item.id} renderItem={({ item }) =>
// 							<OnOff {...item} onToggleStatusDevice={this.toggleStatusDevice}
// 								onDelete={this.deleteDevice} />}
// 					/>
// 				</View>
// 			</View>
// 		)
// 	}
// }