import React from 'react'
import { YellowBox } from 'react-native'
import Navigator from './src/config/Navigator'
import ClientProvider from './src/config/Client'
import DeviceProvider from './src/config/Device'

YellowBox.ignoreWarnings([
    'Remote debugger'
])

function App() {

    return (
        <DeviceProvider >
            <ClientProvider>
                <Navigator />
            </ClientProvider>
        </DeviceProvider>
    )

}
export default App