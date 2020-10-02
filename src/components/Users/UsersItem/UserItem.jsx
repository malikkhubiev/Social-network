import React from 'react';
import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <div className={styles.sectionUserItem}>
            <div className={styles.sectionUserItemLeft}>
                <div className={styles.sectionUserItemLeftImg}></div>
                <div>{props.followed ? <button onClick={()=>{props.unFollow(props.id)}} className={styles.sectionUserItemLeftButton}>Unfollow</button> : <button onClick={()=>{props.follow(props.id)}} className={styles.sectionUserItemLeftButton}>Follow</button>}</div>
            </div>
            <div className={styles.sectionUserItemDesc}>
                <p className={styles.sectionUserItemDescTxt}>{props.name}</p>
                <p className={styles.sectionUserItemDescTxt}>{props.place}</p>
                <p className={styles.sectionUserItemDescTxt}>{props.status}</p>
            </div>
        </div>
    )
}

export default UserItem;
