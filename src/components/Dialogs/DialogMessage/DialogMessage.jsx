import React from 'react';
import d from './DialogMessage.module.css';

const DialogMessage = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

export default DialogMessage;