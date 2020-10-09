import { act } from "react-dom/test-utils";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return{
                ...state,
                users: [...state.users, ...action.users]
            };
        };
        case FOLLOW: {
            return{
                ...state,
                users: state.users.map(a=>{
                    if(a.id === action.userId){
                        return {...a, followed: true};
                    }
                    return a;
                })
            }
        };
        case UNFOLLOW: {
            return{
                ...state,
                users: state.users.map(a=>{
                    if(a.id === action.userId){
                        return {...a, followed: false};
                    }
                    return a;
                })
            }
        };
        default:{
            return state;
        } 
    }
}

export const followAC = (userId) => {return{type: FOLLOW, userId}};
export const unFollowAC = (userId) => {return{type: UNFOLLOW, userId}};
export const setUsersAC = (users) => {return{type: SET_USERS, users}};

export default usersReducer;