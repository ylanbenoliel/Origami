import React from 'react'
import Navigator from './src/config/Navigator'
// import { client } from './src/config/client'
import DeviceContext from './src/config/DeviceContext'

export default function App() {

    const devices = {
        id: 1,
        topic: 'so/quarto',
        status: '0',
        place: 'quarto',
        type: 'onoff'
    }
    return (
        <DeviceContext.Provider value={devices}>
            <Navigator />
        </DeviceContext.Provider>
    )

}