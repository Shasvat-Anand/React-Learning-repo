import React from 'react'

import { useContext} from 'react'
import {MyContext} from '../App'
import Left from './Left'
import Right from './Right'
 
 
function Home({value}) {
    const{color , setcolor} = useContext(MyContext)

    function handleClick(){
        value.setName((prev)=> prev === "Anand" ? "Rohit" : "Anand")
    }


  return (
    <div className={`home ${color}`}> 
    <div>
        <h1>hlwow</h1>
        
        <h1>{value.name}</h1>
        <br />
        <button onClick={handleClick} className='btn'>Change Name</button>

    </div>
        
        <Left/>
        <Right/>
    </div>
  )
}

export default Home