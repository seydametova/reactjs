import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';

import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { compose } from "@mui/system";
import { articlesReducer } from "./articles/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
    key: 'gbMsngr',
    storage,
    blackList: ["profile", "articles"]
}

const persistedReducer = persistReducer(
    config,
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
        articles: articlesReducer,
    })
);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);