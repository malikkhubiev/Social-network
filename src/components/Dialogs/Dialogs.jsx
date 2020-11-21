import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogs = props.dialogs;
    let messages = props.messages;
    let newMessageText = props.newMessageText;

    let dialogsElements = dialogs.map( d => <DialogItem path={d.id} name={d.name} /> );
    let messagesElements = messages.map(m => <DialogMessage message={m.message} />);
    
    let InputMessageRef = React.createRef();
    let onMessageChange = () => {
        let text = InputMessageRef.current.value;
        props.onMessageChange(text);
    }
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.DialogMessages}>
                <div className={d.DialogMessagesItems}>
                    {messagesElements}
                </div>
                <div className={d.DialogMessagesWriting}>
                    <input value={newMessageText} onChange={onMessageChange} ref={InputMessageRef} placeholder='Send message' className={d.DialogMessagesWritingInput}/>
                    <button onClick={onSendMessageClick} className={d.DialogMessagesWritingButton}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;