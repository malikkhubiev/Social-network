import React from 'react';
import Users from './Users'; 
import {connect} from 'react-redux';
import {followAC, unFollowAC, setUsersAC} from './../../redux/users-reducer';

const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unFollow: (userId) => {
            let action = unFollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;