import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, IR } from '../components'
import { client } from '../config/Client'

export default function InfraRed(props) {

	function sendCommand(command) {
		client.publish('so/sala', `${command}`)
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

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	powerContainer: {
		// backgroundColor: 'red',
		flexDirection: "row",
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'space-around',

	},
	menuContainer: {
		// backgroundColor: '#bdc',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 10,
	},
	channelContainer: {
		// backgroundColor: 'yellow',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		fontSize: 18,
		color: 'black'
	},
	volume: {
		// backgroundColor: '#aaa',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingVertical: 10,
	},
	channel: {
		// backgroundColor: '#faa',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingVertical: 10,
	},
	dpadContainer: {
		// backgroundColor: 'green',
		flex: 1
	},
	dpadUp: {
		alignItems: 'center',
	},
	dpadMiddle: {
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 80,
		justifyContent: 'space-between',
	},
	dpadBottom: {
		alignItems: 'center',
	},
});
