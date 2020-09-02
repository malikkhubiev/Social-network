import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Person from './Person/Person';
const Profile = (props) => {
    let posts = props.posts;
    let addPost = props.addPost;
    return (
        <div className={p.mainContent}>
            <Person/>
            <MyPosts addPost={addPost} posts={posts} />
        </div>
    )
}
export default Profile;