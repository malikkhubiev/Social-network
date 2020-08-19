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
                <Post likes="5" message="Hey all, what's app?"/>
                <Post likes="7" message="Hey, i'm fine, how are you?"/>
                <Post likes="2" message="I'm fine too, nice to meet you"/>
                <Post likes="500" message=";)"/>
                <Post likes="52" message="React is so much interesting!"/>
            </div>
        </div>
    )
}
export default MyPosts;