import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  const [count, setCount] = useState(0)
  let  addvalue = ()=>{
    if(count<20)   setCount(count+1)

     
  }

  let removevalue = () => {
    if(count >0)   setCount(count-1)
    
     
  }

  let squarevalue = () => {
    if(count > 20 ) return
    if (count < 20){
      let sq=count * count 
      if(sq>=20) return
      else setCount(sq)
    }
  }


  return (
    <>
       <h1>Hello Anand Welcome to React</h1>
       <h1>Counter {count}</h1>
       <button onClick={addvalue}>Add value</button>
       <br />
       <br />
       <button onClick={removevalue}>Remove value</button>
       <br />
       <br />
       <button onClick={squarevalue}>Square value</button>
      
    </>
  )
}

export default App
