import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map(p => <Post likes={p.likes} message={p.message}/>);
    
    let inputRef = React.createRef();
    let addPost = props.addPost;
    return (
        <div className={p.postsArea}>
            <div className={p.postsMenu}>
                <p className={p.postsMenuHeader}>My posts</p>
                <input ref={inputRef} placeholder='your news...' type="text" />
                <button onClick={()=>addPost(inputRef)} className={p.postsMenuSend}>Add post</button>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;