import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return(
        <header>
            <div>
                <nav>
                    <NavLink to = "/">
                        Home
                    </NavLink>
                    <NavLink to = "/post">
                        Blog
                    </NavLink>
                    <NavLink to = "/project">
                        Projects
                    </NavLink>
                    <NavLink to = "/contact">
                        Contact
                    </NavLink>
                </nav>            
            </div>
        </header>
    )
}