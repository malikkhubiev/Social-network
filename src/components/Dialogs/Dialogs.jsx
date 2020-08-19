import React from 'react';
import d from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.path}`;
    return (
        <div className={d.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const DialogMessage = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItems}>
                <DialogItem path='1' name='Artem' />
                <DialogItem path='2' name='Zabit' />
                <DialogItem path='3' name='Messi' />
                <DialogItem path='4' name='Siera' />
                <DialogItem path='5' name='Zhois' />
            </div>
            <div className={d.DialogMessages}>
                <DialogMessage message='Hi!' />
                <DialogMessage message='Good architecture :)' />
                <DialogMessage message='Have a good day)' />
                <DialogMessage message='#WhatMeansHashTag?' />
                <DialogMessage message='New Website!!!' />
            </div>
        </div>
    );
}
export default Dialogs;