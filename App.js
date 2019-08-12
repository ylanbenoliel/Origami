import React from 'react'
import { YellowBox } from 'react-native'
import Navigator from './src/config/Navigator'
import { Client } from './src/config/Client'
// import { Client } from './src/config/Client'
import DeviceProvider from './src/config/Device'

YellowBox.ignoreWarnings([
    'Remote debugger'
])


function App() {

    return (
        <DeviceProvider >
            <Client>
                {/* <Client /> */}
                <Navigator />
            </Client>
        </DeviceProvider>
    )

}
export default App