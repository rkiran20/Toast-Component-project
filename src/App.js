import './App.css';
import React from 'react';
import {useState,useId} from 'react';


function App() {
  const [message,setMessage] = useState("");
  const [variant,setVariant] = useState("");
  const [popText,setPopText] = useState(false)
  const fromId = useId();
  const handleBtn = (event)=>{
    event.preventDefault();
    setPopText(true);
  }
  return (
    <div className="App">
      Toast Component Project
      {
        popText && <div style={{display:'flex'}}>
          <p>{variant} {message}</p>
          <button onClick={()=>{setPopText(false)}} >❌</button>
        </div>
      }
      <div>
        
        <label htmlFor={fromId} className='formLabel'>Message</label>
        <input id={fromId} type='text' required className='formInput' value={message} onChange={(event)=>{setMessage(event.target.value)}} ></input>
      </div>
      <div>
        <form>
          <span className='formSpan' >Variant</span>
          <input type='radio' name='variant-options' id={`${fromId}-agree-notice`} value="notice" onChange={(event)=>{setVariant(event.target.value)}}  ></input>
          <label htmlFor={`${fromId}-agree-notice`}>notice</label>
          <input type='radio' name='variant-options' id={`${fromId}-agree-warning`} value="warning" onChange={(event)=>{setVariant(event.target.value)}}  ></input>
          <label htmlFor={`${fromId}-agree-warning`}>warning</label>
          <input type='radio' name='variant-options' id={`${fromId}-agree-success`} value="success" onChange={(event)=>{setVariant(event.target.value)}}  ></input>
          <label htmlFor={`${fromId}-agree-notice`}>success</label>
          <input type='radio' name='variant-options' id={`${fromId}-agree-error`} value="error" onChange={(event)=>{setVariant(event.target.value)}}  ></input>
          <label htmlFor={`${fromId}-agree-notice`}>error</label>
        </form>
      </div>
      <button onClick={handleBtn} >Pop Toast</button>
    </div>
  );
}

export default App;
