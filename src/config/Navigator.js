import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Light from '../screens/Light'
import InfraRed from '../screens/InfraRed'
import Split from '../screens/Split'
import commonStyles from '../config/commonStyles'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

const MenuOptions = {
	Light: {
		name: 'Light',
		screen: Light,
		navigationOptions: {
			title: 'Light',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='wb-incandescent' size={24} color={tintColor} />
		}
	},
	InfraRed: {
		name: 'InfraRed',
		screen: InfraRed,
		navigationOptions: {
			title: 'InfraRed',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='power-settings-new' size={24} color={tintColor} />
		}
	},
	Split: {
		name: 'Split',
		screen: Split,
		navigationOptions: {
			title: 'Split',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='ac-unit' size={24} color={tintColor} />
		}
	}

}

const MenuConfig = {
	initialRouteName: 'InfraRed',
	tabBarOptions: {
		showLabel: false,
		activeTintColor: commonStyles.colors.primary,
		inactiveTintColor: commonStyles.colors.secondary,
		style: {
			backgroundColor: commonStyles.colors.default
		}
	}

}

const tabNavigator = createBottomTabNavigator(MenuOptions, MenuConfig)
export default createAppContainer(tabNavigator)