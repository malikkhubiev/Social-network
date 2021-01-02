import React, {useEffect} from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControlls/FormsControlls';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={d.DialogMessagesWriting}>
            <Field component={Input} name='message' placeholder='Send message' className={d.DialogMessagesWritingInput} />
            <button className={d.DialogMessagesWritingButton}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (userId !== undefined) {
            props.getUser(userId);
        } else {
            props.getUser('Default');
        }
    }, [props.match.params.userId]);

    let users = props.users;
    let messages = props.messages;

    let dialogsElements = users.map( d => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements;

    if(messages !== undefined && messages.length){
        messagesElements = messages.map(m => <DialogMessage message={m.message} />);
    }else{
        messagesElements = 'This is the beginning of your communication';
    }

    let addNewMessage = (value) => {
        props.sendMessage(props.id, value.message);
    }

    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItems}>
                {dialogsElements}
            </div>
            {props.shouldDialogBoxBeOpened !== false?<div className={d.DialogMessages}>
                <div className={messages.length?d.DialogMessagesItems:d.DialogNoMessages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} {...props}/>
            </div>:null}
        </div>
    );
}
export default Dialogs;