import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from "react-router-dom";
import { TextField, Button, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from 'uuid';
import "./ChatList.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';

export const ChatList = () => {
    const chatsList = useSelector(selectChats);
    
    const dispatch = useDispatch();

    const [chatName, setChatName] = useState('');

    const handleChange = (event) => {
        setChatName(event.target.value);
    }

    const addChatHandler = (e) => {
        e.preventDefault();

        if (chatName) {
            dispatch(addChat({name: chatName, id: uuidv4()}));
        }

        setChatName('');
    }

    const removeChat = (removeChatId) => {
        dispatch(deleteChat(removeChatId));
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
            <form onSubmit={addChatHandler} className="Form-add-chat">
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