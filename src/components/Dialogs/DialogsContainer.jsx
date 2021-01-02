import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUser, sendMessage } from './../../redux/profile-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        id: state.profilePage.profile.id,
        shouldDialogBoxBeOpened: state.profilePage.profile.shouldDialogBoxBeOpened,
        users: state.usersPage.users,
        messages: state.profilePage.profile.messages,
    };
}

export default compose(
    connect(mapStateToProps, { sendMessage, getUser }),
    withAuthRedirect,
)(Dialogs);