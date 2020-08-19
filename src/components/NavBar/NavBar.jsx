import React from 'react';
import n from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <NavLink activeClassName={n.newCl} to="/profile"><li>Profile</li></NavLink>
                <NavLink activeClassName={n.newCl} to="/dialogs"><li>Messages</li></NavLink>
                <a href=""><li>News</li></a>
                <a href=""><li>Music</li></a>
                <a href=""><li>Settings</li></a>
            </ul>
        </nav>
    )
}
export default NavBar;