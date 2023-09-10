import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config/config';


function fetchCall() {
  fetch(config.APP_URL).then(x => x.json()).then(x => console.log(x));
}
function App() {
  return (
    <>
      <button onClick={fetchCall}>Click</button>
      <div>Here N there</div>
      <div>{process.env.REACT_APP_API_URL}</div>
    </>
  );
}

export default App;
