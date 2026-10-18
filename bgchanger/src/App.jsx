import { use, useState } from 'react'
 
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const [bgname, setbgname] = useState('olive')
  const[name, setname]= useState('Anand')
  const txtname = bgname=== 'black' ?'white': 'black'

  // let name = (cl) => {
  //   setbgname(cl)     
  // }

  const textcolor = bgname=== 'black'? 'white': 'black';


  // const [color, setcolor] = useState('black')
  // const[bgname , setbgname] = useState('black');
  
  return (
    
      <div className='w-full h-screen duration 300 ' style={{backgroundColor:color}}>
        <h1 className='text-black justify-center flex ' style={{color:txtname}} >{name}</h1>
        <h1 className='flex justify-center' style={{color:textcolor}}> This is {bgname}  color</h1>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>{setbgname('red');setColor('red');setname("Red Hulk")}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-white shadow-xl' style={{backgroundColor:"red"}} >Red</button>
            <button onClick={()=>{setbgname('green');setColor('green')}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-white shadow-xl' style={{backgroundColor:"green"}} >Green</button>
            <button onClick={()=>{setbgname('yellow'); setColor("yellow")}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-black shadow-xl' style={{backgroundColor:"yellow"}} >Yellow</button>
            <button onClick={()=>{setColor("blue");setbgname('blue')}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-white shadow-xl' style={{backgroundColor:"blue"}} >Blue</button>
            <button onClick={()=>{setColor("cyan");setbgname('cyan')}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-black shadow-xl' style={{backgroundColor:"cyan"}} >Cyan</button>
            <button onClick={()=>{setColor("gray");setbgname('gray')}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-white shadow-xl' style={{backgroundColor:"gray"}} >Gray</button>
            <button onClick={()=>{setColor("black");setbgname('black');setname('Black Widow')}} className='outline-none px-4  rounded-3xl w-20 h-10 cursor-pointer text-white shadow-xl' style={{backgroundColor:"black"}} >Black</button>
          </div>
        </div>
      </div> 

      // <div className='w-full h-screen font-bold' style={{background:color}} >
      //   <h1  >  this is {color} background</h1>
      //   <button onClick={()=>{ setbgname('green'); setcolor('green')}}  className='bg-green-100 p-3 rounded-2xl cursor-pointer ' >Green</button>
      //   <button onClick={()=>{setbgname('yellow'); setcolor('yellow')}} className='bg-amber-100 p-3 rounded-2xl m-2'>Yellow</button>
      // </div>
    
  )
}

export default App
