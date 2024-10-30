import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './Data/passChar';

function App() {
  let charSet = ''
  let [Uppercase,setUppercase] = useState(false);
  let [Lowercase,setLowercase] = useState(false);
  let [Number,setNumber] = useState(false);
  let [Symbol,setSymbol] = useState(false);
  let [passwordLength,setPasswordLength] = useState(10);
  let [fpass,setfpass] = useState('')
  
  let createPassword = ()=>{
    let finalpass = ''
    //if any of the checkbox is true then we have to generate password according to them.
    if(Uppercase || Lowercase || Symbol || Number)
    {
      if(Uppercase)
      {
        charSet += UC
      }
      if(Lowercase)
      {
        charSet += LC
      }
      if(Number)
      {
        charSet += NC
      }
      if(Symbol)
      {
        charSet += SC
      }
      console.log(charSet);
      
      for(let i=0;i<passwordLength;i++)
      {
        finalpass += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setfpass(finalpass);//update final password.
    }
    else
    {
      alert("atleast one checkbox should be true");
    }
  }

  let copyPass = ()=>{
    navigator.clipboard.writeText(fpass)//to copy the password on clipboard.
  }
  return (
    <>
    <div className="passwordBox">
      <h2>Password Generator</h2>

      <div className='passwordBoxin'>
        <input type="text" value={fpass} readOnly /> <button onClick={copyPass}>Copy</button>
      </div>

      <div className="passLength">
        <label>Password Length</label>
        <input type="number" value={passwordLength} onChange={(event)=>setPasswordLength(event.target.value)} max={20} min={6}/>
      </div>

      <div className="passLength">
        <label>Include uppercase Letters</label>
        <input type="checkbox" checked={Uppercase} onChange={()=>setUppercase(!Uppercase)}/>
      </div>

      <div className="passLength">
        <label>Include lowercase Letters</label>
        <input type="checkbox" checked={Lowercase} onChange={()=>setLowercase(!Lowercase)}/>
      </div>

      <div className="passLength">
        <label>Include Numbers</label>
        <input type="checkbox" checked={Number} onChange={()=>setNumber(!Number)}/>
      </div>

      <div className="passLength">
        <label>Include Symbols</label>
        <input type="checkbox" checked={Symbol} onChange={()=>setSymbol(!Symbol)}/>
      </div>

      <button className="btn" onClick={createPassword}>
        Generate Password
      </button>

    </div>
    </>
  );
}

export default App;
