import React from 'react';
import p from './Profile.module.css';
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
    return (
        <div className={p.mainContent}>
            <Person/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;