import { useEffect, useRef } from 'react';
import { Form } from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';
import './Chats.scss';
import { ChatList } from '../ChatList/ChatList';
import { Messages } from '../Messages/Messages';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithReply } from '../../store/messages/actions';
import  { Navigate } from 'react-router-dom';
import { selectMessages } from '../../store/messages/selectors';

function Chats() {
  const {chatId} = useParams();

  const messages = useSelector(selectMessages);

  const hasChat = useSelector(state => state.chats.some(a => a.id === chatId));
  
  const dispatch = useDispatch();

  const parentRef = useRef();


  const onMessageSend = (text) => {
    dispatch(addMessageWithReply(chatId, {id: uuidv4(),text, author: 'author 1'}))
  };

  if (!hasChat) {
    return (<Navigate to="/404"></Navigate>)
  }

  return (    
    <div className="Chats" ref={parentRef}>
      <ChatList />
      <div className="Chat">
        <Messages messages={messages?.[chatId]}/>
        <Form onMessageSend={onMessageSend}/>
      </div>            
    </div>
  );
}

export default Chats;
