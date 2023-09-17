import React from 'react';
import logo from './logo.svg';
import styles from './login.module.scss';
import { abc } from '../../common/utils';

function Login() {
  abc();
  const a = 'authencationStyles'
  return (
    <>
      <div className={styles.parent}>Parent</div>
      <div className={false ? '' : styles[a]}> Login</div>
      <div className='app-comp'> App comp style ??</div>
      <div className='index-style'> Index style</div>
    </>
  );
}

export default Login;
