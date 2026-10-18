import React from 'react'

const TaskListnumber = ({data}) => {
  return (
    <div className='mt-10 flex justify-between gap-5 screen'>
        <div className='px-9 py-6 w-[45%] bg-red-400 rounded-xl'>
            <h2 className='text-2xl font-bold text-white '>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium text-white'>New Task</h3>
        </div>
        <div className='px-9 py-6 w-[45%] bg-blue-400 rounded-xl'>
            <h2 className='text-2xl font-bold text-white '>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium text-white'>Completed Task</h3>
        </div>
        <div className='px-9 py-6 w-[45%] bg-green-400 rounded-xl'>
            <h2 className='text-2xl font-bold text-white '>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium text-white'>Accepted Task</h3>
        </div>
        <div className='px-9 py-6 w-[45%] bg-yellow-400 rounded-xl'>
            <h2 className='text-2xl font-bold text-white '>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium text-white'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListnumber