import React from 'react';
import d from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.path}`;
    return (
        <div className={d.dialog}><div className={d.dialogAva}></div><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default DialogItem;