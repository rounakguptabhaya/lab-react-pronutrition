import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="container">
        <Home />
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
