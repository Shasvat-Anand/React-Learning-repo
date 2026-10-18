import React from 'react'
import { useNavigate } from 'react-router-dom'

const Teachers = () => {
    const nav = useNavigate();
    function handleClick(){
        nav('teacher')
    }
  return (
    <div>
        <div className="card">
            <h1>Teachers</h1>
            <button onClick= {handleClick}>Teacher Detail</button>
        </div>
    </div>
  )
}

export default Teachers