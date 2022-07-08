import React from 'react';
import Board from './pages/Board/Board.js';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
    </div>
  );
}

export default App;
