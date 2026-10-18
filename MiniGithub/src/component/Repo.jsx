import { useContext } from 'react'
import React from 'react'
import { Mycontext } from '../App'

function Repo() {
  const {repodata}= useContext(Mycontext)
  return (
    <div>Repo
        <h1>{repodata?.[0]?.name}</h1>
    </div>
  )
}

export default Repo