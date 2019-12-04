import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert
} from 'react-native'
import commonStyles from '../config/commonStyles'

const initialState = { place: '', topic: '', type: '' }
export function AddDevice (props) {
  const [device, setDevice] = useState({ ...initialState })

  const save = () => {
    if (device.topic === '') {
      Alert.alert('Dados inválidos', 'Informe um dispositivo!')
      return
    }
    const data = { ...device }
    props.onSave(data)
    setDevice({ ...initialState })
  }

  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType='slide' transparent
    >
      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.offset} />
      </TouchableWithoutFeedback>

      <View style={styles.container}>

        <Text style={styles.header}>Novo dispositivo.</Text>

        <TextInput
          placeholder='Inserir o lugar.'
          style={styles.input}
          onChangeText={place => setDevice(prevState => ({
            ...prevState,
            place
          }))}
          value={device.place}
        />
        <TextInput
          placeholder='Inserir o tópico.'
          style={styles.input}
          onChangeText={topic => setDevice(prevState => ({
            ...prevState,
            topic
          }))}
          value={device.topic}
        />
        <TextInput
          placeholder='Inserir o tipo.'
          style={styles.input}
          onChangeText={type => setDevice(prevState => ({
            ...prevState,
            type
          }))}
          value={device.type}
        />

        <View
          style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
        >
          <TouchableOpacity onPress={props.onCancel}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={save}
          >
            <Text style={styles.button}>Salvar</Text>
          </TouchableOpacity>
        </View>

      </View>

      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.offset} />
      </TouchableWithoutFeedback>
    </Modal>
  )
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  offset: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.modal
  },
  header: {
    backgroundColor: commonStyles.colors.modal,
    color: commonStyles.colors.default,
    textAlign: 'center',
    padding: 15,
    fontSize: 15
  },
  input: {
    width: '95%',
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: commonStyles.colors.primary,
    borderRadius: 6
  }

})
