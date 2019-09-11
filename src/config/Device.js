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
	},
	{
		id: 4,
		topic: 'os/sala',
		status: null,
		place: 'sala',
		type: 'ir'
	},
	{
		id: 5,
		topic: 'os/corredor',
		status: null,
		place: 'corredor',
		type: 'ir'
	},
	{
		id: 6,
		topic: 'os/sala',
		status: null,
		place: 'sala',
		type: 'split'
	},
	{
		id: 7,
		topic: 'os/cozinha',
		status: null,
		place: 'cozinha',
		type: 'split'
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