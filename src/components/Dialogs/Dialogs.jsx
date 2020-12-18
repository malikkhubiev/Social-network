import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControlls/FormsControlls';
import { maxLengthCreator, required } from '../../utils/validators';

const maxLength = maxLengthCreator(25);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={d.DialogMessagesWriting}>
            <Field component={Input} validate={[required, maxLength]} name='message' placeholder='Send message' className={d.DialogMessagesWritingInput} />
            <button className={d.DialogMessagesWritingButton}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogsElements = dialogs.map( d => <DialogItem path={d.id} name={d.name} /> );
    let messagesElements = messages.map(m => <DialogMessage message={m.message} />);
    
    let addNewMessage = (value) => {
        props.sendMessage(value.message);
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
                <AddMessageFormRedux onSubmit={addNewMessage} {...props}/>
            </div>
        </div>
    );
}
export default Dialogs;