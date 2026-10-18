 
import { useContext } from 'react'
import { MyContext } from '../App'
function LeftChild() {
    const {color, setcolor, setValue, value} = useContext(MyContext)
    function handleClick(){
       setcolor((prev) => prev === "light" ? "dark" : "light")
       setValue(value + 1)
        
    }

  return (
    <div className={`left-child ${color}`}>
        <h1>{color}</h1>
        <button onClick={handleClick}>

            {color === "light"  ? "dark": "light"}
        </button>
    </div>
  )
}

export default LeftChild