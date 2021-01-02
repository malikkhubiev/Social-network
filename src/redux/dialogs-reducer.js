const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {}

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

export default dialogsReducer;