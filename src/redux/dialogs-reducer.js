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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let message = action.newMessage;
            let id = state.messages.length+1;
            return{
                ...state,
                messages: [...state.messages, {id, message}]
            }
        }
        default:{
            return state;
        }
    }
}
export const sendMessageActionCreator = (newMessage) => {
    return({
        type: SEND_MESSAGE,
        newMessage
    });
}

export default dialogsReducer;