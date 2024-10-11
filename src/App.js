// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("light")
  const [switchText, setSwitchText] = useState('Enable dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setSwitchText('Enable dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled light mode","success");
    }else{
      setMode('dark');
      setSwitchText('Enable light Mode');
      document.body.style.backgroundColor = '#19356f';
      showAlert("Enabled dark mode","success");
    }
  }
  
  return(
    <>
    <Navbar title = "TextUtils" aboutText = {"About TextUtils"} mode = {mode} toggleMode = {toggleMode} switchText = {switchText}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <TextForm showAlert = {showAlert} heading = "Enter Your text here" mode = {mode} /> 
    </div>
    </>
  );
}

export default App;
