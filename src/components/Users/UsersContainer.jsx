import React from 'react';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount / 150);
        });
    }
    onPageChanged = (n) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(n);
        usersAPI.getUsers(n, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }
    render() {
        return this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users} follow={this.props.follow} unFollow={this.props.unFollow}/>
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching
})(UsersComponent);

export default UsersContainer;