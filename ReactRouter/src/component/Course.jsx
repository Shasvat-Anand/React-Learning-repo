import React from 'react'
import { useNavigate } from 'react-router-dom'

const Course = () => {
    const nav = useNavigate();

    function handleClick(){
        nav('course')
    }




  return (
    <div>
        <div className="card">
            <h1>Course</h1>
            <button onClick={handleClick}>Courses</button>

        </div>
    </div>
  )
}

export default Course
