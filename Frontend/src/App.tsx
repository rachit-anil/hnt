import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import config from './config/config';
import Login from './pages/authentication/login';

function fetchCall() {
  fetch(config.APP_URL).then(x => x.json()).then(x => console.log(x));
}
function App() {
  return (
    <>
      <Login />
      <button onClick={fetchCall}>Click</button>
      <div className={styles.parent}>
        Parent
        <h1 className='child'>Child</h1>
      </div>
      <div>{process.env.REACT_APP_API_URL}</div>
    </>
  );
}

export default App;
