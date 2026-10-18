import React, { useContext } from 'react'
import Header from '../../other/header'
import TaskListnumber from '../../other/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'
import { AuthContext } from '../../context/Authprovider'

const EmployeeDashboard = (props) => {

 

 
 return (
   <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeUser={props.changeUser}  data={props.data}/>
        <TaskListnumber data={props.data} />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashboard