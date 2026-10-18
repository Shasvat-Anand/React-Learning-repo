import React from 'react'

import { useNavigate } from 'react-router-dom'

const Students = () => {
    const nav = useNavigate();

    function handleClick(){
        nav('student')
    }
  return (
    <div>
        <div className="card">
            <h1>Students</h1>
            <button onClick= {handleClick}>Student Detail</button>
        </div>

    </div>
  )
}

export default Students