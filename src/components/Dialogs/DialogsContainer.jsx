import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageActionCreator, sendMessageActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            let action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
        onSendMessageClick: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;