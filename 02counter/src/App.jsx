import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)


//let counter=15

const addValue=()=>{
  if(counter<20){
  counter=counter+1;
  setCounter(counter)
  console.log("clicked",Math.random())
  }
}
const remove=()=>{
  if(counter>0){
setCounter(counter-1)
  }
}

  return (
    <>
      
       <h1>Welcome</h1> 
       <h2>Counter Value:{counter}</h2> 
       <button onClick={addValue}>Add Value{counter}</button>
       <br/>
       <button onClick={remove}>Remove Value{counter}</button>
      
    </>
  )
}

export default App
