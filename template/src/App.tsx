import React from 'react';
import './App.css';
import Todo from './features/Todo';

const App = () => (
  <div className="app">
    <header className="app-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
    <Todo />
  </div>
);

export default App;
