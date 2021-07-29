import React from 'react'
import NavItem from './NavItem'
import { ViewGridIcon, UserIcon, CameraIcon} from '@heroicons/react/solid'

function Sidebar() {

    return (
        // Create the outer box along with the gradient color 
        <div class="h-auto w-80 p-6 rounded-3xl bg-gradient-to-b from-pink-500 to-purple-700">
            <img class="rounded-full bg-white h-16 w-16 p-4 m-1 mb-10" src="assets/default_avatar.png" alt="avatar can't be loaded"></img>
            <NavItem icon={ViewGridIcon} desc="Dashboard"></NavItem>
            <NavItem icon={UserIcon} desc="Profile"></NavItem>
            <NavItem icon={CameraIcon} desc="Camera Groups"></NavItem>
        </div>
    )
}

export default Sidebar

