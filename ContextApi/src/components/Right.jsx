import React from 'react'
import RightChildB from './RightChildB'
import RightChildA from './RightChildA'

function Right() {
  return (
    <div className="right">Right
     <RightChildA/>
     <RightChildB/>
    </div>
  )
}

export default Right