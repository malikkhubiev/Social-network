import React from 'react';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from './../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from './../common/Preloader/Preloader';

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount / 150);
        });
    }
    onPageChanged = (n) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(n);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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