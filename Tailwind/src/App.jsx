import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/card.jsx'

function App() {
 
  return (
    <>
       <h1 className='bg-green-500 rounded-xl p-4 text-black mb-4' >Tailwind Css</h1>
       <Card  tag='#89' content='Namaste India'/>
       <Card price='60' tag='#78' />
    </>
  )
}

export default App
