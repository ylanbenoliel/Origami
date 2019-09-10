import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import commonStyles from '../config/commonStyles'
import { Header, IR } from '../components'
import { client } from '../config/Client'
import { DeviceContext } from '../config/Device'

export default function InfraRed(props) {
	const { globalDevices } = useContext(DeviceContext)
	const [currentDevice, setCurrentDevice] = useState()

	useEffect(() => {
		const irDeviceExists = globalDevices
			.find(device => device.type == 'ir') || null

		setCurrentDevice(irDeviceExists || null)
	}, [])

	function sendCommand(command) {
		client.publish(`${currentDevice.topic}`, `${command}`)
	}



	return (
		<View style={styles.container}>
			<Header />

			<View style={styles.powerContainer}>
				<IR icon='power-settings-new'
					command='power' onSendCommand={sendCommand} />
				<IR icon='input' command='input' onSendCommand={sendCommand} />
			</View>

			<View style={styles.menuContainer}>
				<IR icon='subdirectory-arrow-left'
					command='back' onSendCommand={sendCommand} />
				<IR icon='menu' command='menu' onSendCommand={sendCommand} />
			</View>

			<View style={styles.channelContainer}>
				<View style={styles.volume}>
					<IR icon='add'
						command='vUp' onSendCommand={sendCommand} />
					<Text style={styles.text}>Vol.</Text>
					<IR icon='remove'
						command='vDown' onSendCommand={sendCommand} />
				</View>

				<View style={styles.channel}>
					<IR icon='keyboard-arrow-up'
						command='cUp' onSendCommand={sendCommand} />
					<Text style={styles.text}>Ch.</Text>
					<IR icon='keyboard-arrow-down'
						command='cDown' onSendCommand={sendCommand} />
				</View>
			</View>

			<View style={styles.dpadContainer}>
				<View style={styles.dpadUp}>
					<IR icon='keyboard-arrow-up'
						command='up' onSendCommand={sendCommand} />
				</View>
				<View style={styles.dpadMiddle}>
					<IR icon='keyboard-arrow-left'
						command='left' onSendCommand={sendCommand} />
					<IR icon='check' command='ok' onSendCommand={sendCommand} />
					<IR icon='keyboard-arrow-right'
						command='right' onSendCommand={sendCommand} />
				</View>
				<View style={styles.dpadBottom}>
					<IR icon='keyboard-arrow-down'
						command='down' onSendCommand={sendCommand} />
				</View>
			</View>

			<View style={styles.topicContainer}	>
				{currentDevice !== null
					? globalDevices.map(device => {
						if (device.type == 'ir') {
							const selected = device == currentDevice
								? styles.topicButtonSelected
								: null
							return (
								<TouchableOpacity
									key={device.id}
									onPress={() => setCurrentDevice(device)}
									style={[styles.topicButton, selected]}
								>
									<Text style={styles.text}>
										{device.place.toUpperCase()}
									</Text>
								</TouchableOpacity>
							)
						}
					})
					: <View />
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	powerContainer: {
		flexDirection: "row",
		paddingVertical: 5,
		alignItems: 'center',
		justifyContent: 'space-around',

	},
	menuContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 5,
	},
	channelContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		fontSize: 18,
		color: 'black'
	},
	volume: {
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingVertical: 5,
	},
	channel: {
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingVertical: 5,
	},
	dpadContainer: {
		flex: 1,
	},
	dpadUp: {
		alignItems: 'center',
	},
	dpadMiddle: {
		flexDirection: 'row',
		paddingVertical: 5,
		paddingHorizontal: 80,
		justifyContent: 'space-between',
	},
	dpadBottom: {
		alignItems: 'center',
	},
	topicContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	topicButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 6,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'black',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	topicButtonSelected: {
		backgroundColor: commonStyles.colors.secondary
	},
});
