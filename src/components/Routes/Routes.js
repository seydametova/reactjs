import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../store";
import theme from "../../theme";
import { Articles } from "../Articles/Articles";
import { ChatList } from "../ChatList/ChatList";
import Chats from "../Chats/Chats";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import "./Routes.scss";

export const Router = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="profile" element={<Profile />}></Route>
                    <Route path="articles" element={<Articles />}></Route>
                    <Route path="chats">
                        <Route index element={<ChatList />}></Route>
                        <Route path=":chatId" element={<Chats />}></Route>
                    </Route>
                    <Route path="*" element={<h3 className="Error">404</h3>}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
)