import React from 'react'
import Navigator from './src/config/Navigator'
import ClientProvider from './src/config/Client'
import DeviceProvider from './src/config/Device'
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