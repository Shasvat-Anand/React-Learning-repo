import React from 'react'
import { useParams } from 'react-router-dom'

const ParamCompo = () => {
    const parameter = useParams();
  return (
    <div>Parameter passed in url or route is  : {parameter.id}</div>
  )
}

export default ParamCompo