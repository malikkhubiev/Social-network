import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;