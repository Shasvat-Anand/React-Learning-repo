import React, { useContext } from 'react'
import LeftChild from './LeftChild'
import { MyContext } from '../App'
 
function Left() {
    const data = useContext(MyContext)
  return (
    <div className='left'>
        <h1>{data.name}</h1>



        <LeftChild/>
        <LeftChild/>
        <LeftChild/>
        <LeftChild/>
    </div>
  )
}

export default Left