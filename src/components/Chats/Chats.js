import { useEffect, useState, useRef } from 'react';
import { Form } from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';
import './Chats.scss';
import { ChatList } from '../ChatList/ChatList';
import { Navigate, useParams } from 'react-router'

function Chats() {
  const {chatId} = useParams();

  const [messages, setMessages] = useState({});
  const parentRef = useRef();


  const onMessageSend = (text) => {
    setMessages((prevMessages) => {
      return {
        ...prevMessages,
        [chatId]: [
          ...prevMessages[chatId],
          {id: uuidv4(),text, author: 'author 1'}
        ]
      }
    })
  };

  useEffect(() => {
    parentRef.current?.scrollIntoView({ behavior: "auto" });

    const timeout = setTimeout( () => {
      if (messages[chatId]?.length > 0 && messages[chatId]?.[messages[chatId]?.length - 1].author !== "robot") {
        setMessages((prevMessages) => {
          return {
            ...prevMessages,
            [chatId]: [
              ...prevMessages[chatId],
              {id: uuidv4(),text :"Robot text", author: 'robot'}
            ]
          }
        })
      }    
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messages]);

  useEffect(() => {
    if (!messages[chatId]) {
      setMessages(prevMessages => ({...prevMessages, [chatId]: []}))
    }
  }, [chatId]);

  return (    
    <div className="Chats" ref={parentRef}>
      <ChatList />
      <div className="Chat">
        <div className="Messages">
          {messages?.[chatId]?.map((message) => <div key={message.id}>{message.author}: {message.text}</div>)}
        </div>
        <Form onMessageSend={onMessageSend}/>
      </div>            
    </div>
  );
}

export default Chats;
