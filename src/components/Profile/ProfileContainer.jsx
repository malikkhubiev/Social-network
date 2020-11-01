import React from 'react';
import p from './Profile.module.css';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
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
 
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);;