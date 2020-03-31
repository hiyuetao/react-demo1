import React, { useState } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import HocPage from './pages/HocPage';
import Dialog from './components/dialog'
import './App.css';
function App() {
  const [isShow, setShow ]= useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HocPage />
        <Button type="primary" onClick={()=>{setShow(!isShow)}}>打开弹窗</Button>
        {isShow && <Dialog handleClose={()=>{setShow(!isShow)}} styleObj={{color:'red'}}>这是一个弹窗</Dialog>}

      </header>
    </div>
  );
}

export default App;
