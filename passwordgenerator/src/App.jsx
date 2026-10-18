import { use, useCallback, useEffect, useState ,useRef} from 'react'
 

function App() {
   const[length,setlength]=useState(8)
   const[numberAllow,setnumberAllow ] = useState(false)
   const[charAllow, setcharAllow]= useState(false)

   const[password,setpassword]= useState("")

   const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!#$%&'()*+,-./:;<=>?@[\]^_{|}~`"

    for(let i=1 ; i <= length ; i++){
      let char= Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
   },
  [length,numberAllow,charAllow,setpassword])

  useEffect(()=>{ passwordgenerator()}
  ,[length,numberAllow,charAllow,passwordgenerator])
  
  const passwordref =useRef(null)


  let copyclipboard = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange();
    window.navigator.clipboard.writeText(password)
    
  },[password])


  return (

    <>
       <div className='w-full  max-w-130 mx-auto shadow-md rounded-lg px-4  py-3 my-8  bg-gray-700 text-orange-500  '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full px-3 py-1 bg-white'
          placeholder='password'
          readOnly
          ref={passwordref}
           />
           <button onClick={copyclipboard} className='outline-none  cursor-pointer bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>         
    
        </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-2'>
            <input type="range" 
            min={8}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label >Length : {length}</label>

          </div>
          <div className='flex text-sm gap-x-2 '>
            <input type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={()=>{setnumberAllow((prev) => !prev)}} />
            <label htmlFor='NumberInput'>Number</label>
          </div>
          <div className='flex text-sm gap-x-2 '>
            <input type="checkbox"
            defaultChecked={charAllow}
            id='numberInput'
             
            onChange={()=>{setcharAllow((prev)=> !prev )}} />
            <label htmlFor='CharacterInput'>Special Character</label>
          </div>
         </div>
           
          
       
       </div>
    </>
  )
}

export default App
