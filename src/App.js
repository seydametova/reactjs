import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Chats from "./components/Chats/Chats";
import theme from "./theme";

import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { ChatList } from "./components/ChatList/ChatList";
import { Profile } from "./components/Profile/Profile";
import "./App.scss";

export const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="chats">
                    <Route index element={<ChatList />}></Route>
                    <Route path=":chatId" element={<Chats />}></Route>
                </Route>
                <Route path="*" element={<h3>404</h3>}></Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>    
)
