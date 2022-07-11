import React from 'react';
import Board from './pages/Board/Board.js';
import Header from './components/Header/Header';
import './App.css';
import Backlog from './pages/Backlog/Backlog.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <Backlog/>
    </div>
  );
}

export default App;
