import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Person from './Person/Person';
const Profile = (props) => {
    let posts = props.posts;
    let newPostText = props.newPostText;
    let dispatch = props.dispatch;
    return (
        <div className={p.mainContent}>
            <Person/>
            <MyPosts newPostText = {newPostText} dispatch={dispatch} posts={posts} />
        </div>
    )
}
export default Profile;