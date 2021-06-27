import React from 'react'
import { ViewBoardsIcon, UserIcon } from '@heroicons/react/solid'

function Sidebar() {
    var icon = 'h-10 w-10 text-white mx-auto mb-6'

    return (
        // Create the outer box along with the gradient color 
        <div class="flex-grow w-24 p-6 items-start rounded-3xl bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <ViewBoardsIcon class={icon}></ViewBoardsIcon>
            <UserIcon class={icon}></UserIcon>
        </div>
    )
}

export default Sidebar

