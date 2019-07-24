import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../config/commonStyles'

const iconSize = 50

const IR = (props) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={() => props.onSendCommand(props.id)}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
            <View style={styles.icon}>
                <Icon name={props.name} size={iconSize} 
                    color={commonStyles.colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: iconSize + 10,
        height: iconSize + 5,
        borderWidth: 1,
        borderRadius: 35,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default IR;