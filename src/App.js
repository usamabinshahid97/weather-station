import React from 'react';
import './App.scss';
import Home from './components/Home'
import Api from './components/Api'

function App() {
  return (
    <div className="App">
      <Api></Api>
      <Home></Home>
    </div>
  );
}

export default App;
