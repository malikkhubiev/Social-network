import React from 'react';
import styles from './UserItem.module.css';
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
    return (
        <div className={styles.sectionUserItem}>
            <div className={styles.sectionUserItemLeft}>
                <NavLink to={props.pathCreator(props.id)}><div className={styles.sectionUserItemLeftImg}></div></NavLink>
                <div>{props.followed ? <button onClick={()=>{props.unFollow(props.id)}} className={styles.sectionUserItemLeftButton}>Unfollow</button> : <button onClick={()=> {props.follow(props.id)}} className={styles.sectionUserItemLeftButton}>Follow</button>}</div>
            </div>
            <div className={styles.sectionUserItemDesc}>
                <p className={styles.sectionUserItemDescTxt}>{props.name}</p>
            </div>
        </div>
    )
}


export default UserItem;
