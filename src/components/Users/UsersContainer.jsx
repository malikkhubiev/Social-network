import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setPage, getUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';

const UsersComponent = (props) => {
    useEffect(() => {
        props.getUsers();
    }, []);

    let setPage = (pageNumber) => {
        props.setPage(pageNumber);
    }

    return (
        props.isFetching ? <Preloader /> : <Users totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} setPage={setPage} users={props.users} follow={props.follow} unFollow={props.unFollow}/>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setPage, getUsers,
})(UsersComponent);

export default UsersContainer;