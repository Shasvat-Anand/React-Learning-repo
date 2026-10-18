import React, { useState,useContext } from 'react'
import NewTask from '../components/TaskList/NewTask'
import { AuthContext } from '../context/Authprovider'




const createtask = () => {
  
const [userData,setUserdata]= useContext(AuthContext)
  


const [taskTitle, settaskTitle] = useState('')
const [taskDescription, settaskDescription] = useState('')
const [taskDate, settaskDate] = useState('')
const [asignTo, setasignTo] = useState('')
const [category, setcategory] = useState('')


 


  const submithandler = (e) => {

    e.preventDefault()


     const newTask = {
    taskTitle,
    taskDescription,
    taskDate,
    asignTo,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

  // update employees directly
  const data = userData; // make copy (important for React state)
  data.forEach((elem) => {
    if (asignTo === elem.name) {
      elem.tasks.push(newTask);
      elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
    }
  });

  setUserdata(data); // update context/state → UI re-renders
  console.log("updated data:", data);

  // reset form
  setasignTo("");
  setcategory("");
  settaskDate("");
  settaskDescription("");
  settaskTitle("");
  }


  
  return (
     <div className=' bg-[#1c1c1c] mt-10 p-5 rounded-2xl'>
            <form onSubmit={(e)=>{
              submithandler(e)
            }} className=' flex gap-50 items-start justify-between'>

                <div className='w-1/2'>
                <div>
                <h3>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  settaskTitle(e.target.value)
                }}
                
                type="text" placeholder='Enter Task Title' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none border border-amber-50 '/>
                </div>
                
                <div>
                <h3>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  settaskDate(e.target.value)
                }}
                
                type="date" className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] placeholder:text-gray-400  outline-none border border-amber-50  ' />
                </div>

                <div>
                <h3>Assign To</h3>
                <input
                value={asignTo}
                onChange={(e)=>{
                  setasignTo(e.target.value)
                }}
                
                type="text" placeholder='Employee Name' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none  border border-amber-50 ' />
                </div>

                <div>
                <h3>Category</h3>
                <input
                value={category}
                onChange={(e)=>{
                  setcategory(e.target.value)
                }}
                
                type="text" placeholder='design,dev,etc.' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none border border-amber-50  ' />
                </div>

                </div>

                
                <div className='w-1/2 '> 
                <h3>Task Description</h3>
                <textarea
                value={taskDescription}
                onChange={(e)=>{
                  settaskDescription(e.target.value)
                }}
                
                rows={10} placeholder='Enter Task Description' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none border border-amber-50  '/>
                <button className='mt-5 px-6 py-3 w-full bg-emerald-500 rounded-lg'>Create Task</button>
                </div>

            </form>
        </div>
  )
}

export default createtask