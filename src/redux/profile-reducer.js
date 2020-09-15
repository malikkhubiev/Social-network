import { act } from "react-dom/test-utils";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let inputText = state.newPostText;
            if (inputText) {
                let newPost = { id: state.posts.length + 1, message: inputText, likes: 1000 };
                state.posts.push(newPost);
            }
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    });
}
export const addPostActionCreator = () => {
    return({
        type: ADD_POST,
    })
}
export default profileReducer;