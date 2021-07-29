import React from 'react'
import InfoWidget from '../components/InfoWidget'

function Dashboard() {
    return (
        <div class="w-full ml-4 grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
            <div class="col-span-3">
                <InfoWidget bgColor='ebony-clay' data=""></InfoWidget>
            </div>
            <InfoWidget bgColor='blue-500' data="" ></InfoWidget>
            <InfoWidget bgColor='green-500' data="green-500" ></InfoWidget>
            <InfoWidget bgColor='yellow-200' data="yellow-500" ></InfoWidget>
        </div>
    )
}

export default Dashboard
