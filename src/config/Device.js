import React, { createContext, useState } from 'react'
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
export const DeviceContext = createContext({})
function Device({ children }) {
    const [devices, setDevices] = useState(data)
    console.log(devices)
    return (
        <DeviceContext.Provider value={{ devices }}>
            {children}
        </DeviceContext.Provider>
    )
}
export default Device