import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {
    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogsElements = dialogs.map( d => <DialogItem path={d.id} name={d.name} /> );
    let messagesElements = messages.map(m => <DialogMessage message={m.message} />);
    
    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.DialogMessages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;