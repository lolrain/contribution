import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import broEvent from './browserEvent/BroEvent'

function App() {

  useEffect(() => {
    let dom = document.querySelector('.App')
    console.log('dom', dom)
    broEvent(dom)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.baidu.com"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
