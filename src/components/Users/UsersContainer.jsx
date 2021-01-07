import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setPage, getUsers } from './../../redux/users-reducer';
import { getTotalUsersCount, getAllUsers, getPageSize, getCurrentPage, getIsFetching } from './../../redux/users-selectors';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';

const UsersComponent = (props) => {
    let getUsers = props.getUsers;
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    let setPage = (pageNumber) => {
        props.setPage(pageNumber);
    }

    return (
        props.isFetching ? <Preloader /> : <Users totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} setPage={setPage} users={props.users} follow={props.follow} unFollow={props.unFollow} />
    )
}

const mapStateToProps = (state) => ({
    users: getAllUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
});

let UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setPage, getUsers,
})(UsersComponent);

export default UsersContainer;