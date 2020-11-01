import React from 'react';
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';
const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <Person profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;