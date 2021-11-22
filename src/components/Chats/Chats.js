import { useEffect, useRef } from 'react';
import { Form } from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';
import './Chats.scss';
import { ChatList } from '../ChatList/ChatList';
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/messages/actions';
import  { Navigate } from 'react-router-dom';
import { selectMessages } from '../../store/messages/selectors';

function Chats() {
  const {chatId} = useParams();

  const messages = useSelector(selectMessages);

  const hasChat = useSelector(state => state.chats.some(a => a.id === chatId));
  
  const dispatch = useDispatch();

  const parentRef = useRef();


  const onMessageSend = (text) => {
    dispatch(addMessage({chatId, newMessage: {id: uuidv4(),text, author: 'author 1'}}))
  };

  useEffect(() => {
    parentRef.current?.scrollIntoView({ behavior: "auto" });

    const timeout = setTimeout( () => {
      if (messages[chatId]?.length > 0 && messages[chatId]?.[messages[chatId]?.length - 1].author !== "robot") {
        dispatch(addMessage({chatId, newMessage: {id: uuidv4(),text :"Robot text", author: 'robot'}}))
      }    
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messages]);

  if (!hasChat) {
    return (<Navigate to="/404"></Navigate>)
  }

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
