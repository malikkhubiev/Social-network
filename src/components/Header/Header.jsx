import React from 'react';
import h from './Header.module.css';
import logo from './../../images/logo.png';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header className={h.header}>
            <img src={logo} />
            {props.isAuth ? props.login : <NavLink to='/login'><p>Log in</p></NavLink>} 
        </header>
    )
}
export default Header;