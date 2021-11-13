import { useState } from 'react';
import List from '@mui/material/List';
// import { v4 as uuidv4 } from 'uuid';
import ListItem from '@mui/material/ListItem';
import { NavLink } from "react-router-dom";
import { TextField, Button, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from 'uuid';
import "./ChatList.scss";

export const ChatList = () => {

    const [chatsList, setChatList] = useState([
        { name: 'Chat 1', id: uuidv4() },
        { name: 'Chat 2', id: uuidv4() },
        { name: 'Chat 3', id: uuidv4() },
        { name: 'Chat 4', id: uuidv4() }
    ]);

    const [chatName, setChatName] = useState('');

    const handleChange = (event) => {
        setChatName(event.target.value);
    }

    const addChat = (e) => {
        e.preventDefault();

        if (chatName) {
            setChatList(prevChatList => [...prevChatList, {name: chatName, id: uuidv4()}]);
        }

        setChatName('');
    }

    const removeChat = (removeChatId) => {
        setChatList(prevChatList => prevChatList.filter(chat => chat.id !== removeChatId) );
    }

    return (
        <div className="Chats-list">
            <div className="Chats-list-title">List of chats</div>
            <List>
                {chatsList.map((chat) => (
                    <ListItem key={chat.id}>
                        <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })} to={`/chats/${chat.id}`}>{chat.name}</NavLink>
                        <IconButton color="inherit" onClick={() => removeChat(chat.id)}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <form onSubmit={addChat}>
                <TextField value={chatName} onChange={handleChange} className="Text-fields"></TextField>
                <Button
                type="submit"
                variant="outlined"
                color="primary">
                    Add chat
                </Button>
            </form>
        </div>  
    )
    
}