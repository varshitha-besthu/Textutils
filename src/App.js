import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState('Enable dark Mode');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setSwitchText('Enable dark Mode');
      document.body.style.backgroundColor = '#baa0a0'; // You may want to use a CSS class here
      showAlert("Enabled light mode", "success");
    } else {
      setMode('dark');
      setSwitchText('Enable light Mode');
      document.body.style.backgroundColor = '#3d4d63'; // You may want to use a CSS class here
      showAlert("Enabled dark mode", "success");
    }
  };
  
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText={"About TextUtils"} mode={mode} toggleMode={toggleMode} switchText={switchText} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your text here" mode={mode} />} />
          <Route path="/about" element={<About mode = {mode}/>} />
          <Route path="/textform" element={<TextForm showAlert={showAlert} heading="Enter Your text here" mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
