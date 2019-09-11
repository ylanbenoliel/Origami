import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import commonStyles from '../config/commonStyles'
import { Header, IR } from '../components'
import { DeviceContext } from '../config/Device'
import { client } from '../config/Client'
import fan from '../assets/fan.png'

export default function Split(props) {
	const { globalDevices } = useContext(DeviceContext)
	const [currentDevice, setCurrentDevice] = useState()

	useEffect(() => {
		const splitDeviceExists = globalDevices
			.find(device => device.type == 'split') || null

		setCurrentDevice(splitDeviceExists || null)
	}, [])

	function sendCommand(command) {
		client.publish(`${currentDevice.topic}`, `${command}`)
	}

	return (
		<View style={styles.container}>

			<Header />

			<View style={styles.buttonContainer}>

				<View style={styles.topButtonContainer}>

					<TouchableOpacity
						style={styles.button}
						onPress={() => sendCommand('swing')}>
						<Text style={styles.textTouchable}>Swing</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => sendCommand('fan')}>
						<Image source={fan} />
					</TouchableOpacity>

					<IR icon='timer'
						command='timer' onSendCommand={sendCommand} />
				</View>

				<View style={styles.bottomButtonContainer}>

					<IR icon='add'
						command='up' onSendCommand={sendCommand} />

					<IR icon='power-settings-new'
						command='power' onSendCommand={sendCommand} />

					<IR icon='remove'
						command='down' onSendCommand={sendCommand} />

				</View>

				<View style={styles.topicContainer}	>

					{currentDevice !== null
						? globalDevices.map(device => {
							if (device.type == 'split') {
								const selectedButton = device == currentDevice
									? styles.topicButtonSelected
									: null
								const selectedText = device == currentDevice
									? styles.topicTextSelected
									: null
								return (
									<TouchableOpacity
										key={device.id}
										onPress={() => setCurrentDevice(device)}
										style={[styles.topicButton, selectedButton]}>
										<Text style={[styles.topicText, selectedText]}>
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

		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#FBFBFB'
	},
	buttonContainer: {
		flex: 1,
		paddingVertical: 5,
	},
	topButtonContainer: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	bottomButtonContainer: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	button: {
		width: 32 + 10,
		height: 32 + 5,
		borderWidth: 2,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textTouchable: {
		color: 'black'
	},
	topicContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	topicButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 6,
		paddingHorizontal: 6,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'black',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	topicButtonSelected: {
		backgroundColor: commonStyles.colors.secondary
	},
	topicText: {
		color: 'black',
		fontSize: 16,
		fontWeight: 'bold',
	},
	topicTextSelected: {
		color: 'white'
	}
});