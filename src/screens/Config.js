import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../config/commonStyles'
import { DeviceContext } from '../config/Device'

export default function Config (props) {
  const { globalDevices, setGlobalDevices } = useContext(DeviceContext)

  function showAlertToDelete (device) {
    Alert.alert(
      'Atenção!',
      `Deseja apagar o dispositivo ${device.topic}?`,
      [
        {
          text: 'Cancelar',
          onPress: () => { }
        },
        {
          text: 'Ok',
          onPress: () => {
            setGlobalDevices(globalDevices.filter(item => item !== device))
          }
        }
      ]
    )
  }

  function listTotalDevices () {
    const totalDevices = globalDevices.map(device => {
      return (
        <View key={device.id} style={styles.deviceBox}>
          <View style={styles.deviceInfo}>
            <Text style={styles.placeText}>Lugar: {device.place}</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={styles.topicText}
                numberOfLines={2}
              >Tópico: {device.topic}
              </Text>
              <Text style={styles.typeText}>Tipo: {device.type}</Text>
            </View>
          </View>

          <View style={styles.deviceOptions}>
            <TouchableOpacity style={styles.button}>
              <Icon name='edit' color={commonStyles.colors.primary} size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => showAlertToDelete(device)}
            >
              <Icon name='clear' color={commonStyles.colors.primary} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      )
    })
    return totalDevices
  }

  return (
    <ScrollView style={styles.container}>
      {listTotalDevices()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  deviceBox: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: 15,
    borderWidth: 1
  },
  deviceInfo: {
    flex: 1
  },
  deviceOptions: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 4
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  placeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: commonStyles.colors.primary

  },
  topicText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: commonStyles.colors.primary,
    paddingRight: 5
  },
  typeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: commonStyles.colors.primary
  }

})
