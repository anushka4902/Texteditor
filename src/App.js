
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert,SetAlert]=useState(null);
  const showAlert = (message,type)=>{
     SetAlert({
      msg: message,
      type: type
     })
     setTimeout(() =>{
      SetAlert(null);
  },1500);
     
  }
  const toggleMode = ()=>{
    
    if(mode === 'light')
    {
      setMode('dark');
       document.body.style.backgroundColor ='#042743';
       showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("Light mode has been enabled","success");
    }
  }
  return (
   <>
    {/* <BrowserRouter> */}
   <Navbar mode ={mode} toggleMode={toggleMode}/>
   <Alert alert= {alert}/>
   <div className="container my-3">
   <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/" element= */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route>
          </Routes> */}
        </div>
  
   
   </div>
   {/* </BrowserRouter> */}
   </>


  );
}

export default App;
