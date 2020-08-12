import React from 'react';
import p from './Post.module.css';
const Post = () => {
    return (
        <div className={p.postsPost}>
            <div className={p.postsPostImg}></div>
            <p className={p.postsPostTxt}>Hey all, What's app?</p>
        </div>
    )
}
export default Post;