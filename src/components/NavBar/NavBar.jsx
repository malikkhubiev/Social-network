import React from 'react';
import n from './NavBar.module.css';
import FriendsItem from './FriendsItem/FriendsItem';
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
    let friends = props.friends;
    let friendsElements = friends.map(f=><FriendsItem name={f.name} />);
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <NavLink activeClassName={n.newCl} to="/profile"><li>Profile</li></NavLink>
                <NavLink activeClassName={n.newCl} to="/dialogs"><li>Dialogs</li></NavLink>
                <NavLink activeClassName={n.newCl} to="/users"><li>Users</li></NavLink>
            </ul>
            <div className={n.friends}>
                <p className={n.friendsHeader}>Friends</p>
                <div className={n.friendsItems}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    )
}
export default NavBar;