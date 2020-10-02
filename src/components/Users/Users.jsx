import React from 'react';
import styles from './Users.module.css';
import UserItem from './UsersItem/UserItem';

const Users = (props) => {
    return (
        <div className={styles.sectionUsers}>
            {props.users.map(asd=><UserItem follow={props.follow} unFollow={props.unFollow} key={asd.id} id={asd.id} name={asd.name} status={asd.status} place={asd.place} followed={asd.followed} />)}
        </div>
    )
}

export default Users;