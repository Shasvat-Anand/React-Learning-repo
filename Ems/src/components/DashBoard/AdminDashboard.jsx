import React from 'react'
import Header from '../../other/header'
import CreateTask from '../../other/createtask'
import Alltask from '../../other/Alltask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen p-10 w-full '>
        <Header changeUser={props.changeUser}/>

        <CreateTask  />
        <Alltask  />

    </div>
  )
}

export default AdminDashboard