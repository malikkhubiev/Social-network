import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        isMainUser: state.profilePage.profile.isMainUser,
        posts: state.profilePage.profile.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;