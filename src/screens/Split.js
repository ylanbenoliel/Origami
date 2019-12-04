import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import commonStyles from '../config/commonStyles'
import { Ir, PlaceList } from '../components'
import { DeviceContext } from '../config/Device'
import { ClientContext } from '../config/Client'
import fan from '../assets/fan.png'
import commonStyles from '../config/commonStyles'

const fontIcon = 32
export default function Split (props) {
  const { globalDevices } = useContext(DeviceContext)
  const { client } = useContext(ClientContext)
  const [currentDevice, setCurrentDevice] = useState()

  useEffect(() => {
    const splitDeviceExists = globalDevices
      .find(device => device.type === 'split')

    setCurrentDevice(splitDeviceExists)
  }, [])

  function sendCommand (command) {
    client.publish(`${currentDevice.topic}`, `${command}`)
  }

  return (
    <View style={styles.container}>
      {currentDevice !== undefined?//eslint-disable-line
        <View style={styles.buttonContainer}>
          <View style={styles.topButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => sendCommand('swing')}
            >
              <Text style={styles.textTouchable}>Swing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => sendCommand('fan')}
            >
              <Image source={fan} />
            </TouchableOpacity>

            <Ir
              icon='timer'
              command='timer' onSendCommand={sendCommand}
            />
          </View>

          <View style={styles.bottomButtonContainer}>
            <Ir
              icon='add'
              command='up' onSendCommand={sendCommand}
            />
            <Ir
              icon='power-settings-new'
              command='power' onSendCommand={sendCommand}
            />
            <Ir
              icon='remove'
              command='down' onSendCommand={sendCommand}
            />
          </View>

          <PlaceList
            type='split'
            currentDevice={currentDevice}
            setCurrentDevice={setCurrentDevice}
          />

        </View>
        :// eslint-disable-line
        <View style={styles.noDeviceView}>
          <Text style={styles.noDeviceText}>Sem dispositivos</Text>
        </View>}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FBFBFB'
  },
  buttonContainer: {
    flex: 1,
    paddingVertical: 5
  },
  topButtonContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bottomButtonContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    width: fontIcon + 10,
    height: fontIcon + 5,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTouchable: {
    color: 'black'
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
