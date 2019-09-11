import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DeviceContext } from '../config/Device'
import commonStyles from '../config/commonStyles'

export function PlaceList(props) {
  const { globalDevices } = useContext(DeviceContext)
  const { currentDevice, type } = props
  return (
    < View style={styles.topicContainer} >
      {currentDevice !== null
        ? globalDevices.map(device => {
          if (device.type == type) {
            const selectedButton = device == currentDevice
              ? styles.topicButtonSelected
              : null
            const selectedText = device == currentDevice
              ? styles.topicTextSelected
              : null
            return (
              <TouchableOpacity
                key={device.id}
                onPress={() => props.setCurrentDevice(device)}
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
    </View >
  )
}
const styles = StyleSheet.create({
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
})

