import React from 'react';
import styles from './Users.module.css';
import UserItem from './UsersItem/UserItem';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let currentPage = props.currentPage;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pathCreator = (id) => {
        return `/profile/${id}`
    } 
    return (
        <div className={styles.sectionUsers}>
            {props.users.map(asd => <UserItem pathCreator={pathCreator} follow={props.follow} unFollow={props.unFollow} key={asd.id} id={asd.id} name={asd.name} status={asd.status} place={asd.place} followed={asd.followed} />)}
            <ul className={styles.sectionUsersList}>
                {pages.map((n) => { 
                    return currentPage === n ? <li className={styles.bold}>{n}</li> : <li onClick={() => props.onPageChanged(n)} className={styles.sectionUsersListLi}>{n}</li>
                })}
            </ul>
        </div>
    )
}

export default Users;