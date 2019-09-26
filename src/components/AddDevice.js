// import React, { Component } from 'react'
// import {
//   // Modal,
//   View,
//   // Text,
//   // TextInput,
//   StyleSheet,
//   // TouchableWithoutFeedback,
//   // TouchableOpacity,
//   Alert
// } from 'react-native'
// import commonStyles from '../config/commonStyles'

// const initialState = { place: '', topic: '', type: '' }
// export class AddDevice extends Component {
//   constructor (props) {
//     super(props)
//     this.state = { ...initialState }
//   }

// save = () => {
//   if (!this.state.topic.trim()) {
//     Alert.alert('Dados inválidos', 'Informe um dispositivo!')
//     return
//   }
//   const data = { ...this.state }
//   this.props.onSave(data)
//   this.setState({ ...initialState })
// }

// render () {
//   return (
//     <View />
//     // <Modal
//     // onRequestClose={this.props.onCancel}
//     // visible={this.props.isVisible}
//     // animationType='slide' transparent
//     // >
//     //       <TouchableWithoutFeedback onPress={this.props.onCancel}>
//     //         <View style={styles.offset} />
//     //       </TouchableWithoutFeedback>

//     // <View style={styles.container}>

//     //         <Text style={styles.header}>Novo dispositivo.</Text>

//     // <TextInput
//     //     placeholder='Inserir o lugar.'
//     //     style={styles.input}
//     //     onChangeText={place => this.setState({ place })}
//     //           value={this.state.place}
//     //   />
//     // <TextInput
//     // placeholder='Inserir o tópico.'
//     // style={styles.input}
//     // onChangeText={topic => this.setState({ topic })}
//     // value={this.state.topic}
//     //         />
//     //         <TextInput
//     //           placeholder='Inserir o tipo.'
//     //           style={styles.input}
//     //     onChangeText={type => this.setState({ type })}
//     //     value={this.state.type}
//     //   />

//     //         <View
//     //     style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
//     //   >
//     //           <TouchableOpacity onPress={this.props.onCancel}>
//     //   <Text style={styles.button}>Cancelar</Text>
//     // </TouchableOpacity>
//     //           <TouchableOpacity onPress={this.save}>
//     //             <Text style={styles.button}>Salvar</Text>
//     // </TouchableOpacity>
//     //   </View>

//     //       </View>

//     // <TouchableWithoutFeedback onPress={this.props.onCancel}>
//     // <View style={styles.offset} />
//     //       </TouchableWithoutFeedback>
//     //     </Modal>
//   )
// }
// }

// var styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     justifyContent: 'space-between'
//   },
//   offset: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.7)'
//   },
//   button: {
//     margin: 20,
//     marginRight: 30,
//     color: commonStyles.colors.modal
//   },
//   header: {
//     backgroundColor: commonStyles.colors.modal,
//     color: commonStyles.colors.default,
//     textAlign: 'center',
//     padding: 15,
//     fontSize: 15
//   },
//   input: {
//     width: '95%',
//     height: 40,
//     marginTop: 10,
//     marginLeft: 10,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: commonStyles.colors.primary,
//     borderRadius: 6
//   }

// })
