import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const [val,setVal]=useState([]);

  useEffect(()=>{
    fetch(`/.netlify/functions/hello?name=from netlify serverless functions`)
    .then(res=>res.json())
    .then(obj=>setVal(obj));
  },[])

  return (
    <div className="App">
      <h2>Netlify Functions React App</h2>
      <br/>
      <h3>{val.message}</h3>
    </div>
  );
}

export default App;
