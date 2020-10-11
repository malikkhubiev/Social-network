import React from 'react';
import styles from './Users.module.css';
import UserItem from './UsersItem/UserItem';
import * as axios from 'axios';

const Users = (props) => {
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            props.setUsers(response.data.items);
        });
    }
    return (
        <div className={styles.sectionUsers}>
            {props.users.map(asd => <UserItem follow={props.follow} unFollow={props.unFollow} key={asd.id} id={asd.id} name={asd.name} status={asd.status} place={asd.place} followed={asd.followed} />)}
        </div>
    )
}

export default Users;