import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div className={p.postsArea}>
            <div className={p.postsMenu}>
                <p className={p.postsMenuHeader}>My posts</p>
                <input placeholder='your news...' type="text" />
                <button className={p.postsMenuSend}>Send</button>
            </div>
            <div className={p.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default MyPosts;