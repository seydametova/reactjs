import { useState } from 'react';
import { Message } from './components/Message/Message';
import './App.scss';

function App() {
  const [text, setText] = useState(' i am a prop ')

  const handleClick = () => {
    alert('click');
    setText('123' + Math.random())
  }

  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} onMessageClick={handleClick}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
