import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import commonStyles from '../config/commonStyles'
import { OnOff } from '../components'
import { DeviceContext } from '../config/Device'
import { ClientContext } from '../config/Client'

export default function Light (props) {
  const { globalDevices, setGlobalDevices } = useContext(DeviceContext)
  const { client } = useContext(ClientContext)
  const [currentDevice, setCurrentDevice] = useState()
  useEffect(() => {
    const onoffDeviceExists =
     globalDevices.find(device => device.type === 'onoff')
    setCurrentDevice(onoffDeviceExists)
  }, [])

  function toggleStatusDevice (id) {
    const toggledDevice = globalDevices.map(device => {
      if (device.id === id) {
        client.publish(`${device.topic}`, 't')
        // if (device.status === '1') client.publish(`${device.topic}`, '0')
        // if (device.status === '0') client.publish(`${device.topic}`, '1')
      }
      return device
    })
    setGlobalDevices(toggledDevice)
  }

  return (
    <View style={styles.container}>
      <View style={styles.deviceContainer}>
        {currentDevice !== undefined? //eslint-disable-line
          (
            globalDevices.map(
              device => {
                if (device.type === 'onoff') {
                  return (
                    <View key={device.id}>
                      <OnOff
                        {...device}
                        onToggleStatusDevice={toggleStatusDevice}
                      />
                    </View>
                  )
                }
              }
            )
          )
          : <View style={styles.noDeviceView}>
            <Text style={styles.noDeviceText}>Sem dispositivos</Text>
          </View> /*eslint-disable-line*/}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    paddingTop: 5,
    paddingRight: 10

  },
  deviceContainer: {
    flex: 9,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 5
  },
  noDeviceView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDeviceText: {
    color: commonStyles.colors.primary,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
