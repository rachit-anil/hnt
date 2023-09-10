import React from 'react';
import logo from './logo.svg';
import './App.css';
function fetchCall() {
  fetch('http://13.127.51.92:8080/').then(x => x.json()).then(x => console.log(x));
}
function App() {
  return (
    <>
      <button onClick={fetchCall}>Click</button>
      <div>Here N there</div>
    </>
  );
}

export default App;
