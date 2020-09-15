const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'ADD-MESSAGE';
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let InputMessageText = state.newMessageText;
            if (InputMessageText) {
                let newMessage = { id: state.messages.length + 1, message: InputMessageText };
                state.messages.push(newMessage);
            }
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}
export const updateNewMessageActionCreator = (text) => {
    return({
        type: UPDATE_NEW_MESSAGE,
        newMessageText: text,
    })
}
export const sendMessageActionCreator = () => {
    return({
        type: SEND_MESSAGE,
    })
}
export default dialogsReducer;