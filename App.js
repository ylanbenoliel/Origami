import React from 'react'
import Navigator from './src/config/Navigator'
import ClientContext from './src/config/Client'
import DeviceContext from './src/config/Device'

export default function App() {


    return (
        <DeviceContext>
            <ClientContext>
                <Navigator />
            </ClientContext>
        </DeviceContext>
    )

}