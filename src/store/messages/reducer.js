import { ADD_MESSAGE } from "./actions";

const initialMessages = {};

export const messagesReducer = (state = initialMessages, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE:
            const messages = state[payload.chatId] ? state[payload.chatId] : [];
            return {
                ...state,
                [payload.chatId]: [...messages, payload.newMessage]
            };
        default:
            return state;
    }
}
