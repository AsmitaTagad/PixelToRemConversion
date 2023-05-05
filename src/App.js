import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[result, setResult]=useState('')

  const handleChange=(e)=>{
     let input=e.target.value;
      setResult(0.0625*input)
  }

  return (
    <div>
      <h1>Pixel To rem conversion</h1>
      <h5>Pixle</h5>
      <input type="Number" placeholder="pixel" onChange={handleChange}/>
      <br/>
      <h5>rem</h5>
      <input type="Number" placeholder={result}/>
    </div>
  );
}
