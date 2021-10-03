import React from 'react'
import {VscPerson} from 'react-icons/vsc'

function findIcon(icon){
    var iconClass = 'text-9xl text-white font-bold';
    switch(icon){
        case "human":
            return <VscPerson className={iconClass}></VscPerson>
        default:
            return <VscPerson className={iconClass}></VscPerson>
    }
}

function Single(data, icon) {
    return (
        <div className='flex flex-row h-full justify-center items-center p-3 pl-6 pr-3'>
            <p className='text-white text-4xl font-bold'>{data}</p>
            {findIcon(icon)}            
        </div>
    )
}

export default Single