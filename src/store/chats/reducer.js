// import { v4 as uuidv4 } from 'uuid';
import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialChats = [
    // { name: 'Chat 1', id: uuidv4() },
    // { name: 'Chat 2', id: uuidv4() },
    // { name: 'Chat 3', id: uuidv4() },
    // { name: 'Chat 4', id: uuidv4() }
];

export const chatsReducer = (state = initialChats, { type, payload }) => {
    switch (type) {
        case ADD_CHAT:
            return [
                ...state,
                payload
            ];
        case DELETE_CHAT:
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
}