import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode ,setMode] = useState('light');
    
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark') ;
      document.body.style.backgroundColor =  '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor =  'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar  title="Textutils"  aboutText="About Textutils"  mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">

    {/*<About/>*/}

    <Alert alert={alert}/>

    <TextForm  showAlert={showAlert} heading="Enter your text  " mode={mode}/>
    </div>
    </>
  );
}

export default App;
