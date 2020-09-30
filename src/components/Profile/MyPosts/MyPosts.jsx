import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map(p => <Post likes={p.likes} message={p.message}/>);
    let newPostText = props.newPostText;

    let inputRef = React.createRef();
    let onPostChange = () => {
        let text = inputRef.current.value;
        props.onPostChange(text);
    }
    let onAddPost = () => {
        props.addPost();
    }
    return (
        <div className={p.postsArea}>
            <div className={p.postsMenu}>
                <p className={p.postsMenuHeader}>My posts</p>
                <input ref={inputRef} onChange={onPostChange} value={newPostText} placeholder='your news...' type="text" />
                <button onClick={onAddPost} className={p.postsMenuSend}>Add post</button>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;