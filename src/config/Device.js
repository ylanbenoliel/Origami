import React, { createContext, useState } from 'react'

// data tem que pegar dados ou do async storage ou puxado do backend
const data = [
    {
        id: 1,
        topic: 'os/quarto',
        status: '0',
        place: 'quarto',
        type: 'onoff',
    },
    {
        id: 2,
        topic: 'os/cozinha',
        status: '1',
        place: 'cozinha',
        type: 'onoff',
    },
    {
        id: 3,
        topic: 'os/salao',
        status: '1',
        place: 'salao',
        type: 'onoff',
    }

]
export const DeviceContext = createContext({})

export default function Device(props) {
    const [globalDevices, setGlobalDevices] = useState(data)
    return (
        <DeviceContext.Provider value={{ globalDevices, setGlobalDevices }}>
            {props.children}
        </DeviceContext.Provider>
    )
}