import React from 'react'
import {
    Link
  } from 'react-router-dom';

export default function NavItem(props) {
    return (
        <div class="flex flex-row group">
            <props.icon class="h-10 w-10 text-white mb-2 mt-2 group-hover:text-blue-300"></props.icon>
            <Link to={props.desc.toLowerCase()} class="font-bold text-lg text-white ml-2 my-auto group-hover:text-blue-300">{props.desc}</Link>
        </div>
    )
}
