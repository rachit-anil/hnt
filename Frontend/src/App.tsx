import React from 'react';
import styles from './App.module.scss';
import Login from './pages/authentication/login';
import loginService from './services/login.service';

function login() {
  loginService.login().then(x => x.json()).then(x => console.log(x));
}
function App() {
  return (
    <>
      <Login />
      <button onClick={login}>Login</button>
      <div className={styles.parent}>
        Parent
        <h1 className='child'>Child</h1>
      </div>
      <div>{process.env.REACT_APP_API_URL}</div>
    </>
  );
}

export default App;
