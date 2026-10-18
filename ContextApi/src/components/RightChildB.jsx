import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

function RightChildB() {
const {value} = useContext(MyContext)
  return (
    <div className="right-child-b">RightChildB
    <br />
        <h1>Total Button click: {value}</h1>
         
    </div>
  )
}

export default RightChildB