import React from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Login from '../screens/Login'
import Light from '../screens/Light'
import InfraRed from '../screens/InfraRed'
import Split from '../screens/Split'
import Config from '../screens/Config'
import commonStyles from '../config/commonStyles'
import {
	createSwitchNavigator,
	createDrawerNavigator,
	createBottomTabNavigator,
	createStackNavigator,
	createAppContainer,
} from 'react-navigation'
import logo from '../assets/logocopia.png'

/* 
	- AppSwitchNavigator
		- WelcomeScreen
			- Login Button
		- AppDrawerNavigator
			- Devices - DevicesStackNavigator
				- DevicesTabNavigator
					- Tab 1 - LightScreen
					- Tab 2 - InfraRedScreen
					- Tab 3 - SplitScreen
			- Editar Devices
				- ConfigScreen
			- Sair
				- LogoutScreen
*/

function LogoTitle() {
	return (
		<Image
			source={logo}
			style={{ width: 65, height: 30 }}
		/>
	)
}

const DevicesTabNavigator = createBottomTabNavigator({
	Light: {
		name: 'Luzes',
		screen: Light,
		navigationOptions: {
			title: 'Light',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='wb-incandescent' size={24} color={tintColor} />
		}
	},
	InfraRed: {
		name: 'InfraVermelho',
		screen: InfraRed,
		navigationOptions: {
			title: 'InfraRed',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='power-settings-new' size={24} color={tintColor} />
		}
	},
	Split: {
		name: 'Ar',
		screen: Split,
		navigationOptions: {
			title: 'Split',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='ac-unit' size={24} color={tintColor} />
		}
	}
}, {
	initialRouteName: 'InfraRed',
	tabBarOptions: {
		showLabel: false,
		activeTintColor: commonStyles.colors.primary,
		inactiveTintColor: commonStyles.colors.secondary,
		style: {
			backgroundColor: commonStyles.colors.default
		}
	}
})

const DevicesStackNavigator = createStackNavigator({
	DevicesTabNavigator
},
	{
		headerLayoutPreset: 'center',
		defaultNavigationOptions: ({ navigation }) => {
			return {
				headerLeft: (
					<Icon
						onPress={() => navigation.openDrawer()}
						name='menu'
						size={30}
						style={{ paddingLeft: 10 }}
					/>
				),
				headerTitle: <LogoTitle />
			}
		}
	}
)

const ConfigStackNavigator = createStackNavigator({
	Config
},
	{
		headerLayoutPreset: 'center',
		defaultNavigationOptions: ({ navigation }) => {
			return {
				headerLeft: (
					<Icon
						onPress={() => navigation.openDrawer()}
						name='menu'
						size={30}
						style={{ paddingLeft: 10 }}
					/>
				),
				headerTitle: <LogoTitle />
			}
		}
	}
)

const AppDrawerNavigator = createDrawerNavigator({
	Devices: {
		screen: DevicesStackNavigator,
		navigationOptions: {
			drawerLabel: 'Dispositivos'
		}
	},
	Configuration: {
		screen: ConfigStackNavigator,
		navigationOptions: {
			drawerLabel: 'Configurações'
		}
	}
}, {
	drawerWidth: 170
}
)

const AppSwitchNavigator = createSwitchNavigator({
	Login: Login,
	Dashboard: AppDrawerNavigator
})

// export default createAppContainer(AppSwitchNavigator)
export default createAppContainer(ConfigStackNavigator)