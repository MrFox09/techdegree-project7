import React from 'react';
import {NavLink} from 'react-router-dom';


/** creates a NavBar to route through the topics */

const Nav =()=> {
    return(
        
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats'>Cat</NavLink></li>
                <li><NavLink to='/dogs'>Dog</NavLink></li>
                <li><NavLink to='/computers'>Computer</NavLink></li>
            </ul>
        </nav>

    );
}

export default Nav;