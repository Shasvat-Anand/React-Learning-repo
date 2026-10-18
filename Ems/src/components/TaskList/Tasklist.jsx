import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {

  return (
    <div id='tasklist' className='h-[55%] flex items-center justify-start overflow-auto gap-5 flex-nowrap  w-full py-5  rounded-2xl mt-10 '>
     
     {data.tasks.map((dets , idx)=>{
      if(dets.active){
        return <AcceptTask key={idx} data={dets} />
      }

      if(dets.completed){
        return <CompleteTask key={idx} data={dets} />
      }
      if(dets.failed){
        return <FailedTask key={idx} data={dets} />
      }
      if(dets.newTask){
        return <NewTask key={idx} data={dets} />
      }

     })}
   
     
     
    </div>
  )
  
}

export default Tasklist