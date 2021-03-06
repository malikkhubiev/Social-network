import React from 'react';
import p from './Post.module.css';
const Post = (props) => {
    return (
        <div className={p.postsPost}>
            <div className={p.postsPostImg}></div>
            <p className={p.postsPostTxt}>{props.message}</p>
            <p className={p.postsPostLike}>like: {props.likes}</p>
        </div>
    )
}
export default Post;