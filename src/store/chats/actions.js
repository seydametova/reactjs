import { onValue, set, remove } from 'firebase/database';
import { useState } from 'react';
import { chatsRef, getChatMsgsRefById, getChatRefById } from '../../services/firebase';
import { v4 as uuidv4 } from 'uuid';


export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const SET_CHATS = 'CHATS::SET_CHATS';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id
});

export const addChatWithFb = (newChat) => (dispatch) => {
    set(getChatMsgsRefById(newChat.id), { empty: true });
    set(getChatRefById(newChat.id), newChat);
};

export const removeChatWithFb = (chatId) => (dispatch) => {
    remove(getChatRefById(chatId));
    remove(getChatMsgsRefById(chatId));
}

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats
});

export const initChatsTracking = () => (dispatch) => {
    onValue(chatsRef, (chatsSnap) => {
        console.log(chatsSnap);
        const newChats = [];

        chatsSnap.forEach((snapshot) => {
            newChats.push(snapshot.val());
        });

        dispatch(setChats(newChats));
    });
};