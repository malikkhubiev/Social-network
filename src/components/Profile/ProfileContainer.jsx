import React from 'react';
import p from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 1};
        usersAPI.getUser(userId).then(data => {
            this.props.setUserProfile(data);
        });
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
})

let WithRouterDataContainerComponent = withRouter(ProfileContainer);
 
export default connect(mapStateToProps, {setUserProfile})(WithRouterDataContainerComponent);