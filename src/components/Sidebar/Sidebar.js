import React, { Component } from 'react';
import NavItem from './NavItem'
import { ViewGridIcon, UserIcon, CameraIcon} from '@heroicons/react/solid'

import { getUsername, getOrganizations } from '../../data/user_data'
import Dropdown from '../Dropdown'

class Sidebar extends Component {
    state = {
        name: "Loading..."
    }

    componentDidMount() {
        getUsername((ret) => {
            console.log(ret)
            this.setState({name: ret})
        })
    }

    render() {
        return (
            <div className="h-auto min-w-min p-6 mr-4 rounded-3xl bg-gradient-to-b from-pink-500 to-purple-700">
                <div className="w-60"></div>
                <div className="flex flex-row m-1 mb-6">
                    <img className="rounded-full bg-white h-16 w-16 p-4 " src="assets/default_avatar.png" alt="avatar can't be loaded"></img>
                    <div className="flex items-center px-3 right-0 font-bold text-white">{this.state.name.toString()}</div>
                </div>
                <NavItem icon={ViewGridIcon} desc="Dashboard"></NavItem>
                <NavItem icon={UserIcon} desc="Profile"></NavItem>
                <NavItem icon={CameraIcon} desc="Camera Groups"></NavItem>
                <hr className="mt-6 mb-4 border-0 text-white bg-white h-1"></hr>
                <Dropdown options={getOrganizations()}></Dropdown>
            </div>
        )
    }
}

Sidebar.propTypes = {

};

export default Sidebar;