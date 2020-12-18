import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage));
        }
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);