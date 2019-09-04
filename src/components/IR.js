import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../config/commonStyles'

const iconSize = 42 //emulator cel23

export function IR(props) {
	return (
		<TouchableOpacity style={styles.button}
			onPress={() => props.onSendCommand(props.command)}
			hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
		>
			<View style={styles.icon}>
				<Icon name={props.icon} size={iconSize}
					color={commonStyles.colors.primary} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: iconSize + 10,
		height: iconSize + 5,
		borderWidth: 2,
		borderRadius: 5,
	},
	icon: {
		alignItems: 'center',
		justifyContent: 'center',
	}
});
