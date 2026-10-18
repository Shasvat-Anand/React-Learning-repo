import React, { useContext, useState } from 'react'
import { MyContext } from '../App'

function RightChildA() {
    const {color, setcolor, value , setValue} = useContext(MyContext)

    const[righta , setrighta] = useState(0);

    function handleClick(){
        setcolor((prev) => prev === "light" ? "dark" : "light")
        setrighta(righta + 1)
        setValue(value + 1)
    }

  return (
    <div className="right-child-a">RightChildA
        <h1>Number of time Button click:{righta}</h1> 
        <button onClick={handleClick}>{color === "light" ? "dark" : "light"}</button>
    </div>
  )
}

export default RightChildA