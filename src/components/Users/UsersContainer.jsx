import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, getUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';

const UsersComponent = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, []);

    let onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize);
    }
    return (
        props.isFetching ? <Preloader /> : <Users totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={onPageChanged} users={props.users} follow={props.follow} unFollow={props.unFollow}
        />)
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
    follow, unFollow, setCurrentPage, getUsers
})(UsersComponent);

export default UsersContainer;