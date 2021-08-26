import React from 'react'
import InfoWidget from '../components/InfoWidget'

function Dashboard() {
    return (
        <div className="w-full grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
            <div className="col-span-3">
                <InfoWidget bgColor='ebony-clay' data=""></InfoWidget>
            </div>
            <InfoWidget bgColor='red-500' data="blue-500" ></InfoWidget>
            <InfoWidget bgColor='blue-500' data="green-500" ></InfoWidget>
            <InfoWidget bgColor='green-500' data="yellow-500" ></InfoWidget>
        </div>
    )
}

export default Dashboard
