import React from 'react';
import p from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUsers, setStatus} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(userId !== undefined){
            this.props.getUsers(userId);
        }
    }
    render(){
        return (
            <div className={p.mainContent}>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.profile.status,
});
export default compose(
    connect(mapStateToProps, {getUsers, setStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)