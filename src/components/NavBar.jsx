import React from 'react';
import n from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <li className={n.list-li}>Profile</li>
                <li className={n.list-li}>Messages</li>
                <li className={n.list-li}>News</li>
                <li className={n.list-li}>Music</li>
                <li className={n.list-li}>Settings</li>
            </ul>
        </nav>
    )
}
export default NavBar;