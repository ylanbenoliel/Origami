import React from 'react'
import { View, 
	Text,
	StyleSheet, 
	Dimensions,
	TouchableOpacity } from 'react-native'
import commonStyles from '../config/commonStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default (props) => {
	let colorIcon = null
	if (props.status == 1) colorIcon = 'yellow'
	else colorIcon = commonStyles.colors.default
	return (
		<TouchableOpacity style={styles.button} 
			onPress={() => props.onToggleStatusDevice(props.id)}
			onLongPress={() => props.onDelete(props.id)}>
			<Text style={styles.place}>{props.place.toUpperCase()}</Text>
			<View style={styles.status}>
				<Icon name='wb-incandescent' color={colorIcon} size={60} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: (Dimensions.get('window').width / 2) - 20,
		height: (Dimensions.get('window').width / 2) - 20,
		marginVertical: 2,
		marginHorizontal: 8,
		backgroundColor: commonStyles.colors.secondary,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	place: {
		flex: 2,
		fontSize: 25,

	},
	status: {
		flex: 8,
		alignItems: 'center',
		justifyContent: 'center',

	},
})