import { v4 as uuidv4 } from 'uuid';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {chatId, newMessage}
});

let timeout; 
export const addMessageWithReply = (chatId, newMessage) => (dispatch) => {
    dispatch(addMessage(chatId, newMessage));

    if (newMessage.author !== "robot") {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            dispatch(addMessage(chatId, {id: uuidv4(),text :"Robot text", author: 'robot'}))
        }, 1500);
    }
}