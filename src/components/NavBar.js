import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../assets/edenLogo.v4.png'


export default function NavBar() {
    return(
        <header className="bg-blue-50">
            <div className="container mx-auto flex">
                <div className="container flex justify-start">
                    <NavLink to = "/" exact activeClassName="text-gray-200" className="inline-flex items-center">
                        <img src={image} alt="web developers logo" className="object-contain py-0 px-0 mx-0 my-0 h-24 w-24"/>
                    </NavLink>
                </div>
                <div className="container flex justify-end">
                    <nav className="flex">
                        <NavLink to = "/project" activeClassName="text-gray-900 border-2" className="inline-flex items-center py-3 px-3 my-10 rounded text-gray-900 hover:text-gray-600 font-bold">
                            PROJECTS
                        </NavLink>
                        <NavLink to = "/post" activeClassName="text-gray-900 border-2" className="inline-flex items-center py-3 px-3 my-10 rounded text-gray-900 hover:text-gray-600 font-bold">
                            THOUGHTS
                        </NavLink>
                        <NavLink to = "/contact" activeClassName="text-gray-900 border-2" className="inline-flex items-center py-3 px-3 my-10 rounded text-gray-900 hover:text-gray-600 font-bold">
                            CONTACT
                        </NavLink>
                    </nav>           
                </div>
            </div>
        </header>
    )
}