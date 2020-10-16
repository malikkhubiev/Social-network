import React from 'react';
import styles from './Users.module.css';
import UserItem from './UsersItem/UserItem';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        return (
            <div className={styles.sectionUsers}>
                {this.props.users.map(asd => <UserItem follow={this.props.follow} unFollow={this.props.unFollow} key={asd.id} id={asd.id} name={asd.name} status={asd.status} place={asd.place} followed={asd.followed} />)}
            </div>
        )
    }
}

export default Users;