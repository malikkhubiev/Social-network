import { usersAPI } from '../api/api';

const CHANGE_USER_DATA: string = 'CHANGE_USER_DATA';
const SET_USER_PROFILE: string = 'SET-USER-PROFILE';

type initialStateType = {
    profile: profileType,
}
type profileType = {
    id: number,
    name: string,
    aboutMe: string,
    status: string,
    lookingForAJob: boolean,
    isMainUser: boolean,
    posts: Array<object>,
    messages: Array<object>,
    shouldDialogBoxBeOpened: boolean,
}

let initialState:initialStateType = {
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

const profileReducer = (state = initialState, action:any):initialStateType | profileType => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
                posts: action.profile.posts,
            }
        }
        case CHANGE_USER_DATA: {
            return {
                ...state,
                profile: action.user
            }
        }
        default: {
            return state;
        }
    }
}

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: object,
}

export const setUserProfile = (profile:object):setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

type changeUserDataType = {
    type: typeof CHANGE_USER_DATA,
    user: object,
}

export const changeUserData = (user:object):changeUserDataType => {
    return {
        type: CHANGE_USER_DATA,
        user
    }
}
type sendMessageType = (id: any, message: any) => (dispatch:any) => void;
export const sendMessage:sendMessageType = (id, message) => (dispatch) => {
    let user:any = usersAPI.sendMessage(id, message);
    dispatch(changeUserData(user));
}

export const changeStatus = (status:any) => (dispatch:any) => {
    let user = usersAPI.changeStatus(status);
    dispatch(changeUserData(user));
}

export const addPost = (post:any) => (dispatch:any) => {
    let user = usersAPI.addPost(post);
    dispatch(changeUserData(user));
}

export const getUser = (userId:any) => (dispatch:any) => {
    if (userId === 'Default') {
        let user = usersAPI.getMainUser();
        dispatch(setUserProfile(user));
    } else {
        let user:any = usersAPI.getUser(userId);
        dispatch(setUserProfile(user));
    }
}

export default profileReducer;