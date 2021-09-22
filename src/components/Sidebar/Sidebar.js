import React from 'react';
import NavItem from './NavItem'
import { ViewGridIcon, UserIcon, CameraIcon } from '@heroicons/react/solid'

import Dropdown from '../Dropdown'
import { UserContext } from '../UserContext';

function Sidebar() {
    return (
        <div className="h-auto min-w-min p-6 mr-4 rounded-3xl bg-gradient-to-b from-pink-500 to-purple-700">
            <div className="flex flex-row m-1 mb-6 w-60">
                <img className="rounded-full bg-white h-16 w-16 p-4 " src="assets/default_avatar.png" alt="avatar can't be loaded"></img>
                <UserContext.Consumer>
                    {(value) =>
                        <p className="flex items-center px-3 right-0 font-bold text-white truncate">{value.username}</p>
                    }
                </UserContext.Consumer>
            </div>
            <NavItem icon={ViewGridIcon} desc="Dashboard"></NavItem>
            <NavItem icon={UserIcon} desc="Profile"></NavItem>
            <NavItem icon={CameraIcon} desc="Camera Groups"></NavItem>
            <hr className="mt-6 mb-4 border-0 text-white bg-white h-1"></hr>
            <UserContext.Consumer>
                {(value) =>
                    <Dropdown options={value.organization}></Dropdown>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default Sidebar;