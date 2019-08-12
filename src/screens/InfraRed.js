import React, { Component, useContext } from 'react';
import client from '../config/Client'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../components'
import IR from '../components/IR'


export default function InfraRed(props) {
    function command() {
        client.publish('so/sala', '2')
    }
    return (
        <TouchableOpacity onPress={command}>
            <Text>Enviando sala 2</Text>
        </TouchableOpacity>
    )
}
// export default class InfraRed extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             client: client

//         };
//     }

//     sendCommand = id => {
//         switch (id) {
//             case 0:
//                 client.publish('so/sala', 'power')
//                 break
//             case 1:
//                 client.publish('so/sala', 'back')
//                 break
//             case 2:
//                 client.publish('so/sala', 'menu')
//                 break
//             case 3:
//                 client.publish('so/sala', 'input')
//                 break
//             case 4:
//                 client.publish('so/sala', 'vUp')
//                 break
//             case 5:
//                 client.publish('so/sala', 'vDown')
//                 break
//             case 6:
//                 client.publish('so/sala', 'cUp')
//                 break
//             case 7:
//                 client.publish('so/sala', 'cDown')
//                 break
//             case 8:
//                 client.publish('so/sala', 'up')
//                 break
//             case 9:
//                 client.publish('so/sala', 'left')
//                 break
//             case 10:
//                 client.publish('so/sala', 'ok')
//                 break
//             case 11:
//                 client.publish('so/sala', 'right')
//                 break
//             case 12:
//                 client.publish('so/sala', 'down')
//                 break
//             default:
//                 break
//         }
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Header />

//                 <View style={styles.powerContainer}>
//                     <IR name='power-settings-new' id={0} onSendCommand={this.sendCommand} />
//                 </View>

//                 <View style={styles.menuContainer}>
//                     <IR name='subdirectory-arrow-left' id={1} onSendCommand={this.sendCommand} />
//                     <IR name='menu' id={2} onSendCommand={this.sendCommand} />
//                     <IR name='input' id={3} onSendCommand={this.sendCommand} />
//                 </View>

//                 <View style={styles.channelContainer}>
//                     <View style={styles.volume}>
//                         <IR name='add' id={4} onSendCommand={this.sendCommand} />
//                         <Text style={styles.text}>
//                             Vol.
//                         </Text>
//                         <IR name='remove' id={5} onSendCommand={this.sendCommand} />
//                     </View>
//                     <View style={styles.channel}>
//                         <IR name='keyboard-arrow-up' id={6} onSendCommand={this.sendCommand} />
//                         <Text style={styles.text}>
//                             Ch.
//                         </Text>
//                         <IR name='keyboard-arrow-down' id={7} onSendCommand={this.sendCommand} />
//                     </View>
//                 </View>

//                 <View style={styles.dpadContainer}>
//                     <View style={styles.dpadUp}>
//                         <IR name='keyboard-arrow-up' id={8} onSendCommand={this.sendCommand} />
//                     </View>
//                     <View style={styles.dpadMiddle}>
//                         <IR name='keyboard-arrow-left' id={9} onSendCommand={this.sendCommand} />
//                         <IR name='check' id={10} onSendCommand={this.sendCommand} />
//                         <IR name='keyboard-arrow-right' id={11} onSendCommand={this.sendCommand} />
//                     </View>
//                     <View style={styles.dpadBottom}>
//                         <IR name='keyboard-arrow-down' id={12} onSendCommand={this.sendCommand} />
//                     </View>
//                 </View>

//             </View>

//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    powerContainer: {
        // backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    menuContainer: {
        // backgroundColor: '#bdc',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    channelContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 18,
        color: 'black'
    },
    volume: {
        // backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    channel: {
        // backgroundColor: '#faa',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    dpadContainer: {
        // backgroundColor: 'green',
        flex: 1
    },
    dpadUp: {
        alignItems: 'center',
    },
    dpadMiddle: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 80,
        justifyContent: 'space-between',
    },
    dpadBottom: {
        alignItems: 'center',
    },
});
