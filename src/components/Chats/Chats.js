import { useRef } from 'react';
import { Form } from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';
import './Chats.scss';
import { ChatList } from '../ChatList/ChatList';
import { Messages } from '../Messages/Messages';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithReplyFb } from '../../store/messages/actions';
import  { Navigate } from 'react-router-dom';
import { selectName } from "../../store/profile/selectors";

function Chats({msgs }) {
  const {chatId} = useParams();
  
  const dispatch = useDispatch();

  const parentRef = useRef();

  const userName = useSelector(selectName);


  const onMessageSend = (text) => {
    dispatch(addMessageWithReplyFb(chatId, {id: uuidv4(),text, author: userName}))
  };

  if (!msgs[chatId]) {
    return (<Navigate replace to="/chats"></Navigate>)
  }

  return (    
    <div className="Chats" ref={parentRef}>
      <ChatList />
      <div className="Chat">
        <Messages messages={msgs?.[chatId]}/>
        <Form buttonText={'Send'} onMessageSend={onMessageSend}/>
      </div>          
    </div>
  );
}

export default Chats;
