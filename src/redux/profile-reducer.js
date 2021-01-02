import { act } from "react-dom/test-utils";
import { usersAPI } from './../api/api';

const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profile: {
        id: 0,
        name: "Malik",
        aboutMe: 'Я Front-end разработчик',
        status: "Double click me!",
        lookingForAJob: true,
        isMainUser: true,
        posts: [],
        messages: [],
        shouldDialogBoxBeOpened: false,
    },
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile,
                posts: action.profile.posts,
            }
        }
        case CHANGE_USER_DATA: {
            return{
                ...state,
                profile: action.user
            }
        }
        default:{
            return state;
        }
    }
}

export const sendMessage = (id, message) => (dispatch) => {
    let user = usersAPI.sendMessage(id, message);
    dispatch(changeUserData(user));   
}

export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}

export const changeUserData = (user) => {
    return{
        type: CHANGE_USER_DATA,
        user
    }
}

export const changeStatus = (status) => (dispatch) => {
    let user = usersAPI.changeStatus(status);
    dispatch(changeUserData(user));   
}

export const addPost = (post) => (dispatch) => {
    let user = usersAPI.addPost(post);
    dispatch(changeUserData(user));
}

export const getUser = (userId) => (dispatch) => {
    if(userId === 'Default'){
        let user = usersAPI.getMainUser();
        dispatch(setUserProfile(user));
    }else{
        let user = usersAPI.getUser(userId);
        dispatch(setUserProfile(user));    
    }
}

export default profileReducer;