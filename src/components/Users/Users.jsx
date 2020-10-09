import React from 'react';
import styles from './Users.module.css';
import UserItem from './UsersItem/UserItem';

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            { id: 1, name: "Dima G.", place: "Belarus, Minsk", status: "I'm looking!!!", followed: true },
            { id: 2, name: "Andrey O.", place: "Russia, Moscow", status: "In the gym.", followed: false },
            { id: 3, name: "Sara O.", place: "Netherlands, Amsterdam", status: "The trees are beautiful...", followed: true },
            { id: 4, name: "Jessy G.", place: "USA, New York", status: "We're all so happy!", followed: true },
            { id: 5, name: "Po L.", place: "Australia, Canberra", status: "Programming is too much interesting", followed: true },
            { id: 6, name: "Kane E.", place: "India, New Delhi", status: "The message were sent", followed: false },
        ]);
    }
    return (
        <div className={styles.sectionUsers}>
            {props.users.map(asd => <UserItem follow={props.follow} unFollow={props.unFollow} key={asd.id} id={asd.id} name={asd.name} status={asd.status} place={asd.place} followed={asd.followed} />)}
        </div>
    )
}

export default Users;