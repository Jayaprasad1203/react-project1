// src/App.js
import React from 'react';
import Login from './project';
import Home1 from './homepage';
import Login2 from './signup';

function App1() {
  return (
    <div className="App">
      <Login />
      <Login2/> 
      <Home1/>
    </div>
  );
}

export default App1;
