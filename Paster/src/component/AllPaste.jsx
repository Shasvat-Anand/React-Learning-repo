import React from 'react'
import { useSelector } from 'react-redux'



const AllPaste = () => {
  const allpastes= useSelector((state) => state.paste.pastes)
  console.log(allpastes)
  return (
    <div>AllPaste</div>
  )
}

export default AllPaste