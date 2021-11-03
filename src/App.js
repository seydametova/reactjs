import { useEffect, useState, useRef } from 'react';
import { Form } from './components/Form/Form';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function App() {
  const [messages, setMessages] = useState([]);
  const parentRef = useRef();
  const [chatsList, setChatList] = useState([
    { name: 'Chat 1', id: uuidv4() },
    { name: 'Chat 2', id: uuidv4() },
    { name: 'Chat 3', id: uuidv4() },
    { name: 'Chat 4', id: uuidv4() }
  ]);

  const onMessageSend = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {id: uuidv4(),text, author: 'author 1'}
    ])
  };

  useEffect(() => {
    parentRef.current?.scrollIntoView({ behavior: "auto" });

    const timeout = setTimeout( () => {
      if (messages.length > 0 && messages[messages.length - 1].author !== "robot") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {id: uuidv4(),text: "Robot text", author: 'robot'}
        ]);
      }    
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messages])

  return (
    <div className="App" ref={parentRef}>
      <div className="Chats-list">
        <div className="Chats-list-title">List of chats</div>
        <List>
          {chatsList.map((chat) => <ListItem key={chat.id}>{chat.name}</ListItem>)}
        </List>
      </div>
      <div className="Chat">
        <div className="Messages">
          {messages.map((message) => <div key={message.id}>{message.author}: {message.text}</div>)}
        </div>
        <Form onMessageSend={onMessageSend}/>
      </div>            
    </div>
  );
}

export default App;
