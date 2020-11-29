import React from 'react';
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
    return (
        <div>
            <Person {...props} profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;