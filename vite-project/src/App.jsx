import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] =useState(15)
  // let counter = 15
  const addValue = () => {
// console.log("Value Add",Math.random);
console.log("Clicked",counter);
counter = counter +1
setCounter(counter)
  }

  return (
    <>
    <h1>1st vite+ react project with RKD</h1>
    <h2>counter value: {counter}</h2>
    <button   onClick={addValue}>
      Add value {counter}</button>
    <br/>
     <button>Remove value {counter}</button>
     <p>sdssdfdfdfd {counter}</p>
      
    </>
  )
}

export default App
