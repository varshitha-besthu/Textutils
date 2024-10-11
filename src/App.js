// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("light")
  const [switchText, setSwitchText] = useState('Enable dark Mode')
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setSwitchText('Enable dark Mode');
      document.body.style.backgroundColor = 'white';
    }else{
      setMode('dark');
      setSwitchText('Enable light Mode');
      document.body.style.backgroundColor = 'black';
    }
  }
  return(
    <>
    <Navbar title = "TextUtils" aboutText = {"About TextUtils"} mode = {mode} toggleMode = {toggleMode} switchText = {switchText}/>
    <div className="container my-3">
      <TextForm heading = "Enter Your Text here" mode = {mode} /> 
    </div>
    </>
  );
}

export default App;
