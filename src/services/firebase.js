import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyArpECfdADAffj1FYcpFP-0s9ckMOGsotA",
  authDomain: "messenger-2021-9973b.firebaseapp.com",
  projectId: "messenger-2021-9973b",
  storageBucket: "messenger-2021-9973b.appspot.com",
  messagingSenderId: "807489570772",
  appId: "1:807489570772:web:52ced7b0c0e7e8c76a7841"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, 'user')
export const chatsRef = ref (db, 'chats');
export const messagesRef = ref (db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/${id}`)
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`)
export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`)