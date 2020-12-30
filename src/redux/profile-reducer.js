import { act } from "react-dom/test-utils";
import { usersAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'; 

let initialState = {
    profile: {
        id: 0,
        name: "Malik",
        aboutMe: 'Я Front-end разработчик',
        status: "Double click me!",
        lookingForAJob: true,
    },
    posts: [
        { id: 1, message: "Hi!", likes: 5 },
        { id: 2, message: "Hey, i'm fine, how are you?", likes: 7 },
        { id: 3, message: "I'm fine too, nice to meet you", likes: 2 },
        { id: 4, message: ";)", likes: 500 },
        { id: 5, message: "React is so much interesting!", likes: 52 },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let message = action.post;
            let id = state.posts.length+1;
            return{
                ...state,
                posts: [...state.posts, {id, message, likes: 100}]
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
export const addPostActionCreator = (post) => {
    return ({
        type: ADD_POST,
        post,
    })
}
export const setUserProfile = (profile) => {
    return({
        type: SET_USER_PROFILE,
        profile
    })
}
export const setStatus = (status) => {
    return({
        type: SET_STATUS, status
    })
}
export const getUser = (userId) => async (dispatch) => {
    if(userId === 'mainUser'){
        dispatch(setUserProfile(initialState.profile));
    }else{
        let user = usersAPI.getUser(userId);
        dispatch(setUserProfile(user));    
    }
}

export default profileReducer;