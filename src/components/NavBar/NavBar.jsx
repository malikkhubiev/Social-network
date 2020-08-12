import React from 'react';
import n from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    )
}
export default NavBar;