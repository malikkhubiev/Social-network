import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Input } from '../../common/FormsControlls/FormsControlls';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength]} name='postText' component={Input} placeholder='your news...' />
            <button className={p.postsMenuSend}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let posts = [...props.posts];
    let postsElements = posts.reverse().map(p => <Post key={p.id} likes={p.likes} message={p.message} />);
    let addPost = (value) => {
        props.addPost(value.postText);
    }
    return (
        <div className={p.postsArea}>
            {props.isMainUser?<div className={p.postsMenu}>
                <p className={p.postsMenuHeader}>My posts</p>
                <AddNewPostFormRedux onSubmit={addPost}/>
            </div>:null}
            <div className={p.posts}>
                {postsElements.length?postsElements:<p className={p.postsHeader}>This user has not posted anything</p>}
            </div>
        </div>
    )
}
export default MyPosts;