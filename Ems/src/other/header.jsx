import React from 'react'
import { setLocalStorage } from '../utils/localStorage'

const header = (props) => {
   
  const logout = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    
  }  


  return (
    <div className='text-white flex justify-between items-end'>
        <h1 className='text-2xl font-medium'> Hello, <br/> <span className='text-3xl font-semibold'>{props.data?.name} 😎</span></h1>
        <button onClick={logout} className='bg-red-400 px-5 py-3 cursor-pointer font-medium text-lg rounded-2xl '>Log Out</button>
    </div>
  )
}

export default header