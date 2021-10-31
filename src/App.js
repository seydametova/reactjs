import { useEffect, useState } from 'react';
// import { Message } from './components/Message/Message';
// import { Counter } from './components/Counter/Counter'
import './App.scss';
import { Form } from './components/Form/Form';

function App() {
  // const [text, setText] = useState(' i am a prop ');
  // const [showCounter, setShowCounter] = useState(true);
  const [messages, setMessages] = useState([]);

  const onMessageSend = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {text, author: 'author 1'}
    ])
  };

  useEffect(() => {
    setTimeout( () => {
      if (messages.length > 0 && messages[messages.length - 1].author !== "robot") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {text: "Robot text", author: 'robot'}
        ]);
      }    
    }, 1500)
  }, [messages])

  // const handleClick = () => {
  //   alert('click');
  //   setText('123' + Math.random());
  // }

  // const handleToggleCounter = () => {
  //   setShowCounter(prevShow => !prevShow);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {messages.map((message) => <div>{message.text}</div>)}
        <br/>
        {/* <Message message={text} onMessageClick={handleClick}/>
        <button onClick={handleToggleCounter}>{showCounter ? 'hide' : 'show'} counter</button>
        {showCounter && <Counter text={text} />} */}
        <Form onMessageSend={onMessageSend}/>
      </header>
    </div>
  );
}

export default App;
