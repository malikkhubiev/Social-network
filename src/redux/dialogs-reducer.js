const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Artem' },
        { id: 2, name: 'Zabit' },
        { id: 3, name: 'Messi' },
        { id: 4, name: 'Siera' },
        { id: 5, name: 'Zhois' },
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Good architecture :)' },
        { id: 3, message: 'Have a good day)' },
        { id: 4, message: '#WhatMeansHashTag?' },
        { id: 5, message: 'New Website!!!' },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    let newState = {
        ...state,
        newMessageText: state.newMessageText,
        messages: [...state.messages],
    }
    switch (action.type) {
        case SEND_MESSAGE:{
            let InputMessageText = newState.newMessageText;
            if (InputMessageText) {
                let newMessage = { id: newState.messages.length + 1, message: InputMessageText };
                newState.messages.push(newMessage);
            }
            newState.newMessageText = '';
            return newState;
        }
        case UPDATE_NEW_MESSAGE: {
            newState.newMessageText = action.newMessageText;
            return newState;
        }
        default:{
            return newState;
        }
    }
}
export const sendMessageActionCreator = () => {
    return({
        type: SEND_MESSAGE,
    })
}
export const updateNewMessageActionCreator = (text) => {
    return({
        type: UPDATE_NEW_MESSAGE,
        newMessageText: text,
    })
}

export default dialogsReducer;