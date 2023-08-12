import React, { useState } from "react";
import "../src/App.css";

const App = () => {

const [num1, setNum1] = useState("");
const [num2, setNum2] = useState("");
const [success, setSuccess] = useState("")
const [error, setError] = useState("")

function validateInput(){
    if(!num1 || isNaN(num1)  ){
        setSuccess("")
        setError("Num1 cannot be empty")
        return false;
    }
    if(!num2 || isNaN(num2)){
        setSuccess("")
        setError("Num2 cannot be empty")
        return false
    }
    setError("")
   return true 
    
}


function handleAddBtn(){
if(validateInput()){
   return setSuccess(Number(num1)+Number(num2))
    
}
}

function handleSubtractBtn(){
    if(validateInput()){
        return setSuccess(Number(num1)-Number(num2))
         
     }   
}

function handleMultiplyBtn(){
    if(validateInput()){
        return setSuccess(Number(num1)*Number(num2))
         
     }
}

function handleDivideBtn(){
    if(validateInput()){
        return setSuccess(Number(num1)/Number(num2))
         
     }
}

  return (
    <div className="container">
    <div className="heading">
        <h1>React Calculator</h1>
    </div>
   
    <div className="num1_input">
        <input type="text" placeholder="Num1" value={num1} onChange={(e)=>setNum1(e.target.value)} />
    </div>
      
    <div className="num2_input">
        <input type="text" placeholder="Num2" value={num2} onChange={(e)=>setNum2(e.target.value)} />
    </div>
    <div className="buttons">
        <button onClick={handleAddBtn}>+</button>
        <button onClick={handleSubtractBtn}>-</button>
        <button onClick={handleMultiplyBtn}>*</button>
        <button onClick={handleDivideBtn}>/</button>
        
    </div>
    <div className="message">
        {error &&  <p style={{color:"red"}}>Error!<div style={{color:"#2b2b2b"}}>{error}</div></p>}
        {success &&  <p style={{color:"green"}}>Success!<div style={{color:"#2b2b2b"}}>Result - {success}</div></p>}
    </div>
    </div>
  );
};
export default App;