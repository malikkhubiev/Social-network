import React from 'react';
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from './../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';
const Profile = (props) => {
    return (
        <div>
            <Person profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;