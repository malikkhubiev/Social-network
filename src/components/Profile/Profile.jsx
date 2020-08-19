import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Person from './Person/Person';
const Profile = () => {
    return (
        <div className={p.mainContent}>
            <Person/>
            <MyPosts/>
        </div>
    )
}
export default Profile;