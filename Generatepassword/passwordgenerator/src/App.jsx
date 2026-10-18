import { useState , useCallback, useEffect, useRef} from 'react'
 
import './App.css'

function App() {
   const [len , setlen] = useState(8);

   const[num, setnum] = useState(false);
 
   
   const[sym , setsym] = useState(false);

   const[pass, setpass ] = useState("");

   const copypasswordRef = useRef(null);

  //  Component re-render hone par React har baar naye functions memory me allocate karta hai.
  //  useCallback aapke function ko cache (memoize) kar leta hai
  //  jab tak uski dependencies (length, numberAllowed, charAllowed) na badlen.


 const generatePassword =  useCallback(()=>{
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num1 = "0123456789";
    let sym1 = "!@#$%^&*()_+";

    if(num){
      char += num1;
    }
    if(sym){
      char +=sym1;
    }

    let password = "";
    console.log(len);
    console.log(char.length);




    for(let i = 1; i <= len ; i++){
      let id = Math.floor(Math.random() * char.length + 1) ;


      password += char.charAt(id);
    }

    setpass(password);

  }, [len, num , sym])
   
  // React me jab state change hoti hai (jaise Slider drag kiya, 
  // ya Numbers/Symbols checkbox tik kiya), to aap chahte ho ki password apne aap re-generate ho jaye.

  // useEffect ki dependency array [length, numberAllowed, charAllowed]
  //  me jab bhi koi ek value badlegi, React automatically iske andar wale function ko dobara execute kar dega.
  useEffect(()=>{
    generatePassword();
   }, [len , num, sym])


   const copypassword = () =>{
      copypasswordRef.current?.select();
      window.navigator.clipboard.writeText(copypasswordRef.current.value);
   }



  return (
    <>

      <div className="container flex flex-col items-center justify-center gap-5 m-5">
          <h1 className='text-xl text-500'>Password Generator</h1>
          <div className="box border-1 border-gray-400 p-5 rounded-xl">


          <div className="my-5">
              <input type="text" value={pass} ref={copypasswordRef}  placeholder="Generate Password" className=' w-90 border border-2 p-4 border-gray-500 rounded-xl'  
               readOnly />

              <button onClick={copypassword}  className='bg-blue-500 text-white p-4 rounded-xl mx-4 cursor-pointer hover:bg-green-400 '>copy</button>
              
          </div>

          <div className="para ">
            <input type="range" min={8} max={32} value={len}  onChange={(e) => setlen(e.target.value)}  />
            
            <label>Length: {len}</label>

            <input type="checkbox" className='mx-4'
            checked= {num} onChange={()=> setnum(!num)}/>
            <label >Numbers</label>

            <input type="checkbox"  className='mx-4' checked ={sym} onChange= {()=> setsym(!sym)}/>
            <label className='mx-4'>Symbols</label>



            






          </div>
          </div>
      </div>


       
    </>
  )
}

export default App
