import React from 'react'
import { ViewGridIcon, UserIcon } from '@heroicons/react/solid'

function Sidebar() {
    var icon = 'h-10 w-10 text-white mb-6'

    return (
        // Create the outer box along with the gradient color 
        <div class="h-auto w-80 p-6 rounded-3xl bg-gradient-to-b from-pink-500 to-purple-700">
            <img class="rounded-full bg-white h-16 w-16 p-4 m-1 mb-10" src="assets/default_avatar.png" alt="avatar can't be loaded"></img>
            <ViewGridIcon class={icon}></ViewGridIcon>
            <UserIcon class={icon}></UserIcon>
        </div>
    )
}

export default Sidebar

