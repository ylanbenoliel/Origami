import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, IR } from '../components'
import { DeviceContext } from '../config/Device'
import { client } from '../config/Client'

export default function Split(props) {
	function sendCommand(command) {
		client.publish('so/split', `${command}`)
	}
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.displayContainer}>
				<View style={styles.display}>
					<Text style={styles.temperature}>27°</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<View style={styles.middle}>
					<IR icon='power-settings-new'
						command='power' onSendCommand={sendCommand} />

					<IR icon='keyboard-arrow-up'
						command='up' onSendCommand={sendCommand} />

					<IR icon='keyboard-arrow-down'
						command='down' onSendCommand={sendCommand} />
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	displayContainer: {
		alignItems: "center",
		paddingTop: 10
	},
	display: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '90%',
		height: 120,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'rgba(0,255,0,0.7)',
		paddingHorizontal: 10,
		backgroundColor: 'rgba(0,215,0,0.5)'
	},
	temperature: {
		fontWeight: 'bold',
		fontSize: 48,
		color: 'rgba(0,0,0,0.8)'
	},
	buttonContainer: {
		flex: 1,
		paddingVertical: 5,
		backgroundColor: 'yellow',
	},
	middle: {
		height: '70%',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 5,
		backgroundColor: 'red',
	},

});