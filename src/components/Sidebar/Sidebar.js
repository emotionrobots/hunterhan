import React, { useContext } from 'react';
import NavItem from './NavItem'
import { ViewGridIcon, UserIcon, CameraIcon, LogoutIcon } from '@heroicons/react/solid'
import {
    Link
} from 'react-router-dom';
import Dropdown from '../Dropdown'
import { UserContext } from '../Contexts/UserContext';
import { StateContext } from '../Contexts/StateContext';
import Auth from '@aws-amplify/auth';

function Sidebar() {
    // eslint-disable-next-line
    const [state, dispatch] = useContext(StateContext)

    return (
        <div className="h-full min-w-min p-6 mr-4 rounded-3xl bg-gradient-to-b from-pink-500 to-purple-700">
            <div className="flex flex-row m-1 mb-6 w-60">
                <img className="rounded-full bg-white h-16 w-16 p-4 " src="assets/default_avatar.png" alt="avatar can't be loaded"></img>
                <UserContext.Consumer>
                    {(value) =>
                        <p className="flex items-center px-3 right-0 font-bold text-white truncate">{value.username}</p>
                    }
                </UserContext.Consumer>
            </div>
            <Link to={'/'}><NavItem icon={ViewGridIcon} desc="Dashboard"></NavItem></Link>
            <Link to={'/profile'}><NavItem icon={UserIcon} desc="Profile"></NavItem></Link>
            <Link to={'/cameragroups'}><NavItem icon={CameraIcon} desc="Camera Groups"></NavItem></Link>
            <hr className="mt-6 mb-4 border-0 text-white bg-white h-1"></hr>
            <UserContext.Consumer>
                {(value) =>
                    <Dropdown options={value.organization}></Dropdown>
                }
            </UserContext.Consumer>
            <button
            className="absolute bottom-6 pb-4"
            onClick={async (e) => {
                dispatch({type: 'start_loading', loadingMessage: 'Logging you out...'})
                e.preventDefault()
                await Auth.signOut()
                window.location.reload()
            }}>
                <NavItem icon={LogoutIcon} desc="Logout"></NavItem>
            </button>
        </div>
    )
}

export default Sidebar;