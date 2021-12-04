import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onValue } from 'firebase/database';

import { store } from "../../store";
import theme from "../../theme";
import { Articles } from "../Articles/Articles";
import { ChatList } from "../ChatList/ChatList";
import Chats from "../Chats/Chats";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { PublicOutlet } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"
import "./Routes.scss";
import { Navigation } from "../Navigation/Navigation";
import { SignUp } from "../SignUp/SignUp";
import { useEffect, useState } from "react";
import { auth, messagesRef } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";

export const Router = () => {

    const dispatch = useDispatch();
    const [msgs, setMsgs] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn({name: user.email}));
            } else {
                dispatch(signOut());
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const newMsgs = {};

            snapshot.forEach((chatMsgsSnap) => {
                newMsgs[chatMsgsSnap.key] = Object.values(
                    chatMsgsSnap.val().messageList || {}
                );
            });

            setMsgs(newMsgs);
        });
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Navigation/>
                    <div className="Container-content">
                        <Routes>
                            <Route 
                                path="/"
                                element={<PublicOutlet />}>
                                <Route path="" element={<Home />}/>
                            </Route>
                            <Route 
                                path="/signup"
                                element={<PublicOutlet />}>
                                <Route path="" element={<SignUp />}/>
                            </Route>
                            <Route
                                path="profile"
                                element={
                                    <PrivateRoute>
                                        <Profile />
                                    </PrivateRoute>
                                }>
                            </Route>
                            <Route path="articles" element={<Articles />}></Route>
                            <Route path="chats">
                                <Route
                                    index
                                    element={
                                        <PrivateRoute>
                                            <ChatList />
                                        </PrivateRoute>
                                    }>
                                </Route>
                                <Route
                                    path=":chatId"
                                    element={
                                        <PrivateRoute>
                                            <Chats msgs={msgs} />
                                        </PrivateRoute>
                                    }>
                                </Route>
                            </Route>
                            <Route path="*" element={<h3 className="Error">404</h3>}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
};