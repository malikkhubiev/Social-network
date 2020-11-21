import React from 'react';
import {connect} from 'react-redux';
import {follow, unFollow, setCurrentPage, getUsers} from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (n) => {
        this.props.getUsers(n, this.props.pageSize);
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
    follow, unFollow, setCurrentPage, getUsers
})(UsersComponent);

export default UsersContainer;