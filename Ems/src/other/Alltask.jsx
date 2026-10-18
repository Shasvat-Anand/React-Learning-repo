import React, { useContext } from 'react'
import { AuthContext } from '../context/Authprovider'

const Alltask = () => {


   const [userData,setUserdata]= useContext(AuthContext)
    

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded-2xl h-50 '>

        <div className='bg-amber-400 mb-2 py-2 px-4 gap-1 text-center rounded flex justify-between items-center '>
            <h2 className='w-1/5 bg-green-400  text-black rounded-sm '>Employee Name</h2>
            <h3 className='w-1/5 bg-green-400 text-black rounded-sm'>New Task</h3>
            <h3 className='w-1/5 bg-green-400 text-black rounded-sm'>Active Task</h3>
            <h3 className='w-1/5 bg-green-400 text-black rounded-sm'>Completed</h3>
            <h3 className='w-1/5 bg-green-400 text-black rounded-sm '>Failed</h3>
 
        </div> 

        <div id='alltask' className='h-[80%]   overflow-auto'>

           
            {userData.map(function(elem, idx){
                return <div key={idx} className='bg-amber-400 mb-2 py-2  rounded flex justify-between  '>
            <h2 className='w-1/5  text-center text-l font-medium'>{elem.name}</h2>
            <h3 className='w-1/5 text-center  text-l font-medium'>{elem.taskNumbers.newTask}</h3>
            <h3 className='w-1/5 text-center  text-l font-medium'>{elem.taskNumbers.active}</h3>
            <h3 className='w-1/5 text-center  text-l font-medium'>{elem.taskNumbers.completed}</h3>
            <h3 className='w-1/5 text-center  text-l font-medium'>{elem.taskNumbers.failed}</h3>
             
            </div> 
            })}
        </div>       
         
    </div>
  )
}

export default Alltask