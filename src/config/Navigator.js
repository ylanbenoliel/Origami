import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Light from '../screens/Light'
import InfraRed from '../screens/InfraRed'
import Split from '../screens/Split'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

const databases = ['Light', 'InfraRed', 'Split']

const MenuOptions = {
    Light: {
        name: 'Light',
        screen: props => <Light screen={databases[0]} />,
        navigationOptions: {
            title: 'Luzes',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='wb-incandescent' size={30} color={tintColor} />
        }
    },
    InfraRed: {
        name: 'InfraRed',
        screen: props => <InfraRed screen={databases[1]} />,
        navigationOptions: {
            title: 'InfraRed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='power-settings-new' size={30} color={tintColor} />
        }
    },
    Split: {
        name: 'Split',
        screen: props => <Split screen={databases[2]} />,
        navigationOptions: {
            title: 'Split',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='ac-unit' size={30} color={tintColor} />
        }
    }

}

const MenuConfig = {
    initialRouteName: 'Split',
    tabBarOptions: {
        showLabel: false
    }
}

const tabNavigator = createBottomTabNavigator(MenuOptions, MenuConfig)
export default createAppContainer(tabNavigator)