import React from 'react'

const AcceptTask = ({data}) => {
 
  return (
      <div className='h-full w-[300px] flex-shrink-0 bg-purple-400 p-5 rounded-2xl '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-400 px-4 font-bold py-1 rounded '>{data.category}</h3>
          <h4 className='font-bold'>{data.date}</h4>
        </div>
        <h2 className='mt-5  text-2xl font-medium'>{data.tasktitle}</h2>
        <p className='mt-2 text-md'>

         {data.taskdescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-400 py-1 px-2 text-sm rounded-2xl'>Mark as completed</button>
            <button className='bg-red-400 py-1 px-2 text-sm rounded-2xl'>Mark as failed</button>
        </div>
      </div>
  )
}

export default AcceptTask