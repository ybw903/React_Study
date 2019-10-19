import React from 'react';
import logo from './logo.svg';
import './App.css';


//BODY부분이라 보면 됨
function App() {
  return (
    <div className="gray-background">
      <img src ={logo} lat="logo"/>
      <h2> Let's develop management system!</h2>
    </div>
    //react는 jsx문법을 따름
  );
}

export default App;
