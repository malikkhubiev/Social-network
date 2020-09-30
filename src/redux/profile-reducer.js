import { act } from "react-dom/test-utils";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        { id: 1, message: "Hi!", likes: 5 },
        { id: 2, message: "Hey, i'm fine, how are you?", likes: 7 },
        { id: 3, message: "I'm fine too, nice to meet you", likes: 2 },
        { id: 4, message: ";)", likes: 500 },
        { id: 5, message: "React is so much interesting!", likes: 52 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    let newState = {
        ...state,
        posts: [...state.posts],
        newPostText: state.newPostText,
    };
    switch (action.type) {
        case ADD_POST: {
            let inputText = newState.newPostText;
            if (inputText) {
                let newPost = { id: newState.posts.length + 1, message: inputText, likes: 1000 };
                newState.posts.push(newPost);
            }
            newState.newPostText = '';
            return newState;
        }
        case UPDATE_NEW_POST_TEXT:{
            newState.newPostText = action.newText;
            return newState;
        }
        default:{
            return newState;
        }
    }
}
export const addPostActionCreator = () => {
    return ({
        type: ADD_POST,
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    });
}

export default profileReducer;