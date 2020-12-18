import React from 'react';
import h from './Header.module.css';
import logo from './../../images/logo.png';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header className={h.header}>
            <img src={logo} />
            {props.isAuth ? <div><p>{props.name}</p><button onClick={props.LogoutSanka}>Log out</button></div> : <NavLink to='/login'><p>Log in</p></NavLink>} 
        </header>
    )
}
export default Header;