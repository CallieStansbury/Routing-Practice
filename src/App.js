import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Views/Home';
import Word from './Views/Word';
import Color from './Views/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="home" />
        <Word path=":word" />
        <Color path="/:word/:backgroundColor/:color" />
      </Router>
    </div>
  );
}

export default App;
