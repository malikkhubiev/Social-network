import React, { useEffect } from 'react';
import p from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUser, changeStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfile, getStatus } from '../../redux/profile-selectors';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    let getUser = props.getUser;
    useEffect(() => {
        if (userId !== undefined) {
            getUser(userId);
        }else{
            getUser('Default');
        }
    }, [userId, getUser]);
    return (
        <div className={p.mainContent}>
            <Profile {...props} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
});

export default compose(
    connect(mapStateToProps, { getUser, changeStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);