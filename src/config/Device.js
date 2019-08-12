import React, { createContext, useState } from 'react'

// data tem que pegar dados ou do async storage ou puxado do backend
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
export const DeviceContext = createContext({})
function Device({ children }) {

    const [globalDevices, setGlobalDevices] = useState(data)
    return (
        <DeviceContext.Provider value={{ globalDevices, setGlobalDevices }}>
            {children}
        </DeviceContext.Provider>
    )
}
export default Device