import React, { useEffect } from 'react';
import p from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUser, changeStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (userId !== undefined) {
            props.getUser(userId);
        }else{
            props.getUser('mainUser');
        }
    }, [props.match.params.userId]);
    return (
        <div className={p.mainContent}>
            <Profile {...props} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.profile.status,
});
export default compose(
    connect(mapStateToProps, { getUser, changeStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)