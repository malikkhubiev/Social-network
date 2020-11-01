import { act } from "react-dom/test-utils";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,    
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return{
                ...state,
                users: action.users
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
        case SET_TOTAL_USERS_COUNT: {
            return{
                ...state,
                totalUsersCount: action.totalCount,
            }
        };
        case SET_CURRENT_PAGE: {
            return{
                ...state,
                currentPage: action.pageNumber,
            }
        };
        case TOGGLE_IS_FETCHING: {
            return{
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:{
            return state;
        } 
    }
}

export const follow = (userId) => {return{type: FOLLOW, userId}};
export const unFollow = (userId) => {return{type: UNFOLLOW, userId}};
export const setUsers = (users) => {return{type: SET_USERS, users}};
export const setCurrentPage = (pageNumber) => {return{type: SET_CURRENT_PAGE, pageNumber}};
export const setTotalUsersCount = (totalCount) => {return{type: SET_TOTAL_USERS_COUNT, totalCount}};
export const toggleIsFetching = (isFetching) => {return{type: TOGGLE_IS_FETCHING, isFetching}};

export default usersReducer;