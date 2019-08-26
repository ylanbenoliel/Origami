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
				<IR name='power-settings-new'
					command='power' onSendCommand={sendCommand} />
			</View>

			<View style={styles.menuContainer}>
				<IR name='subdirectory-arrow-left'
					command='back' onSendCommand={sendCommand} />
				<IR name='menu' command='menu' onSendCommand={sendCommand} />
				<IR name='input' command='input' onSendCommand={sendCommand} />
			</View>

			<View style={styles.channelContainer}>
				<View style={styles.volume}>
					<IR name='add'
						command='vUp' onSendCommand={sendCommand} />
					<Text style={styles.text}>Vol.</Text>
					<IR name='remove'
						command='vDown' onSendCommand={sendCommand} />
				</View>

				<View style={styles.channel}>
					<IR name='keyboard-arrow-up'
						command='cUp' onSendCommand={sendCommand} />
					<Text style={styles.text}>Ch.</Text>
					<IR name='keyboard-arrow-down'
						command='cDown' onSendCommand={sendCommand} />
				</View>
			</View>

			<View style={styles.dpadContainer}>
				<View style={styles.dpadUp}>
					<IR name='keyboard-arrow-up'
						command='up' onSendCommand={sendCommand} />
				</View>
				<View style={styles.dpadMiddle}>
					<IR name='keyboard-arrow-left'
						command='left' onSendCommand={sendCommand} />
					<IR name='check' command='ok' onSendCommand={sendCommand} />
					<IR name='keyboard-arrow-right'
						command='right' onSendCommand={sendCommand} />
				</View>
				<View style={styles.dpadBottom}>
					<IR name='keyboard-arrow-down'
						command='down' onSendCommand={sendCommand} />
				</View>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
	powerContainer: {
		// backgroundColor: 'red',
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',

	},
	menuContainer: {
		// backgroundColor: '#bdc',
		flexDirection: 'row',
		justifyContent: 'space-around',
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
