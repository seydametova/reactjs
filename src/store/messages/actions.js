import { v4 as uuidv4 } from 'uuid';
import { getChatMsgsListRefById } from '../../services/firebase';
import { push } from 'firebase/database';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {chatId, newMessage}
});

let timeout; 
export const addMessageWithReply = (chatId, newMessage) => () => {
    push(getChatMsgsListRefById(chatId), newMessage);

    if (newMessage.author !== "robot") {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            push(getChatMsgsListRefById(chatId), {id: uuidv4(),text :"Robot text", author: 'robot'});
        }, 1500);
    }
}