import React from 'react';
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
    return (
        <React.Fragment>
            <Person {...props} profile={props.profile} />
            <MyPostsContainer />
        </React.Fragment>
    )
}
export default Profile;