import React, { createContext, useState } from 'react'

// data tem que pegar dados ou do async storage ou puxado do backend
let data = [
    {
        id: 1,
        topic: 'so/quarto',
        status: '0',
        place: 'quarto',
        type: 'onoff',
    },
    {
        id: 2,
        topic: 'so/cozinha',
        status: '1',
        place: 'cozinha',
        type: 'onoff',
    },
    {
        id: 3,
        topic: 'so/salao',
        status: '1',
        place: 'salao',
        type: 'onoff',
    }

]
export const DeviceContext = createContext({})

export default function Device({ children }) {
    const [globalDevices, setGlobalDevices] = useState(data)
    return (
        <DeviceContext.Provider value={{ globalDevices, setGlobalDevices }}>
            {children}
        </DeviceContext.Provider>
    )
}