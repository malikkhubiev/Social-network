import { act } from "react-dom/test-utils";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        { id: 1, name:"Dima G.", place:"Belarus, Minsk", status:"I'm looking!!!", followed: true},
        { id: 2, name:"Andrey O.", place:"Russia, Moscow", status:"In the gym.", followed: false},
        { id: 3, name:"Sara O.", place:"Netherlands, Amsterdam", status:"The trees are beautiful...", followed: true},
        { id: 4, name:"Jessy G.", place:"USA, New York", status:"We're all so happy!", followed: true},
        { id: 5, name:"Po L.", place:"Australia, Canberra", status:"Programming is too much interesting", followed: true},
        { id: 6, name:"Kane E.", place:"India, New Delhi", status:"The message were sent", followed: false},
    ],
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