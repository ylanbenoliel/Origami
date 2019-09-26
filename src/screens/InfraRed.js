import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import commonStyles from '../config/commonStyles'
import { Ir, PlaceList } from '../components'
import { DeviceContext } from '../config/Device'
import { client } from '../config/Client'

export default function InfraRed (props) {
  const { globalDevices } = useContext(DeviceContext)
  const [currentDevice, setCurrentDevice] = useState()

  useEffect(() => {
    const irDeviceExists = globalDevices
      .find(device => device.type === 'ir') || null

    setCurrentDevice(irDeviceExists || null)
  }, [])

  function sendCommand (command) {
    client.publish(`${currentDevice.topic}`, `${command}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>

        <View style={styles.powerContainer}>
          <Ir
            icon='power-settings-new'
            command='power' onSendCommand={sendCommand}
          />
          <Ir
            icon='input'
            command='input' onSendCommand={sendCommand}
          />
        </View>

        <View style={styles.menuContainer}>
          <Ir
            icon='subdirectory-arrow-left'
            command='back' onSendCommand={sendCommand}
          />
          <Ir
            icon='menu'
            command='menu' onSendCommand={sendCommand}
          />
        </View>

        <View style={styles.channelContainer}>
          <View style={styles.volume}>
            <Ir
              icon='add'
              command='vUp' onSendCommand={sendCommand}
            />
            <Text style={styles.text}>Vol.</Text>
            <Ir
              icon='remove'
              command='vDown' onSendCommand={sendCommand}
            />
          </View>

          <View style={styles.channel}>
            <Ir
              icon='keyboard-arrow-up'
              command='cUp' onSendCommand={sendCommand}
            />
            <Text style={styles.text}>Ch.</Text>
            <Ir
              icon='keyboard-arrow-down'
              command='cDown' onSendCommand={sendCommand}
            />
          </View>

        </View>

        <View style={styles.dpadContainer}>
          <View style={styles.dpadUp}>
            <Ir
              icon='keyboard-arrow-up'
              command='up' onSendCommand={sendCommand}
            />
          </View>

          <View style={styles.dpadMiddle}>
            <Ir
              icon='keyboard-arrow-left'
              command='left' onSendCommand={sendCommand}
            />
            <Ir
              icon='check'
              command='ok' onSendCommand={sendCommand}
            />
            <Ir
              icon='keyboard-arrow-right'
              command='right' onSendCommand={sendCommand}
            />
          </View>

          <View style={styles.dpadBottom}>
            <Ir
              icon='keyboard-arrow-down'
              command='down' onSendCommand={sendCommand}
            />
          </View>

        </View>

      </View>

      <PlaceList
        type='ir'
        currentDevice={currentDevice}
        setCurrentDevice={setCurrentDevice}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  buttonContainer: {
    flex: 8
  },
  powerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5
  },
  channelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 18,
    color: 'black'
  },
  volume: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5
  },
  channel: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5
  },
  dpadContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  dpadUp: {
    alignItems: 'center'
  },
  dpadMiddle: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 80,
    justifyContent: 'space-between'
  },
  dpadBottom: {
    alignItems: 'center'
  }
})
