import React, { createContext, useState } from 'react'

export const DeviceContext = createContext({})
function Device({ children }) {
    let data = [
        {
            id: 1,
            topic: 'so/quarto',
            status: '0',
            place: 'quarto',
            type: 'onoff',
            connected: false
        },
        {
            id: 2,
            topic: 'so/sala',
            status: '1',
            place: 'sala',
            type: 'onoff',
            connected: false
        }
    ]
    const [devices, setDevices] = useState(data)
    return (
        <DeviceContext.Provider value={{ devices, setDevices }}>
            {children}
        </DeviceContext.Provider>
    )
}
export default Device