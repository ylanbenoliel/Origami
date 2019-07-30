import React, { createContext, useState } from 'react'

export const DeviceContext = createContext({})

let data = [
    {
        id: 1,
        topic: 'quarto',
        status: '0',
        place: 'quarto',
        type: 'onoff'
    },
    {
        id: 2,
        topic: 'sala',
        status: '1',
        place: 'sala',
        type: 'onoff'
    }
]
function Device({ children }) {
    // const [devices, setDevices] = useState(data)
    console.log('device')
    return (
        <DeviceContext.Provider value={{ data }}>
            {children}
        </DeviceContext.Provider>
    )
}

export default Device