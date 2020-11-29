import { act } from "react-dom/test-utils";
import { usersAPI } from './../api/api';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'; 

let initialState = {
    profile: {
        status: "I'm fine!",
        aboutMe: 'Я Front-end разработчик',
        fullName: "Malik",
        lookingForAJob: true,
        photos: {small: null, large: null},
        userId: 99999
    },
    posts: [
        { id: 1, message: "Hi!", likes: 5 },
        { id: 2, message: "Hey, i'm fine, how are you?", likes: 7 },
        { id: 3, message: "I'm fine too, nice to meet you", likes: 2 },
        { id: 4, message: ";)", likes: 500 },
        { id: 5, message: "React is so much interesting!", likes: 52 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let inputText = state.newPostText;
            let newPosts = [...state.posts];
            if (inputText) {
                let newPost = { id: newPosts.length + 1, message: inputText, likes: 1000 };
                newPosts.push(newPost);
                return{
                    ...state,
                    posts: newPosts,
                    newPostText: '',
                }
            } 
        }
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return{
                ...state,
                profile: {
                    ...state.profile,
                    status: action.status, 
                } 
            }
        }
        default:{
            return state;
        }
    }
}
export const addPostActionCreator = () => {
    return ({
        type: ADD_POST,
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    });
}
export const setUserProfile = (profile) => {
    return({
        type: SET_USER_PROFILE,
        profile
    })
}
export const setStatus = (status) => {return({type: SET_STATUS, status})}

export const getUsers = (userId) => {
    return (dispatch) => {
        usersAPI.getUser(userId).then(data => {
           dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;