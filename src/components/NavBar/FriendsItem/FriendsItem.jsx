import React from 'react';
import f from './FriendsItem.module.css';
const FriendsItem = (props) => {
    return (
        <div className={f.friendsItem}>
            <div className={f.friendsItemImg}></div>
            <p className={f.friendsItemName}>{props.name}</p>
        </div>
    )
}
export default FriendsItem;