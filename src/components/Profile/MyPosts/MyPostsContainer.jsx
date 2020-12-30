import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (value) => {
            dispatch(addPostActionCreator(value));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;