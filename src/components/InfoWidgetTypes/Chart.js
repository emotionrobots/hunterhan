import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, Legend } from 'recharts'

const DEBUG_DATA = [
    { name: '1:00', personExit: 2, personEnter: 5, peopleInside: 4 },
    { name: '2:00', personExit: 5, personEnter: 8, peopleInside: 6 },
    { name: '3:00', personExit: 7, personEnter: 6, peopleInside: 4 },
    { name: '4:00', personExit: 4, personEnter: 9, peopleInside: 3 },
]

const KEYS = {
    'personExit': '# of people Exited',
    'personEnter': '# of people Entered',
    'peopleInside': '# of people Inside',
}

/**
 * Chart info widget component renders data based on 
 * @param {ChartContext} props 
 * @returns Chart info widget body
 */
export default function Chart(props) {
    console.log('test')
    return (
        <div className='flex relative h-full w-full p-4'>
            {/* <div className='flex flex-col w-60'>
                <div className='font-bold text-white text-xl'>Data Configuration</div>
            </div> */}
            <ResponsiveContainer>
                <AreaChart data={DEBUG_DATA} margin={{ top: 0, right: 0, bottom: 0, left: -35 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend  />
                    <CartesianGrid vertical={false} horizontal={false}/>
                    <Tooltip />
                    <Area type="monotone" name='# of people Exited' dataKey="personExit" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" name='# of people Entered' dataKey="personEnter" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
            <VscSettings className='absolute bottom-2 right-2 text-white text-xl font-bold'></VscSettings>
        </div>
    )
}
