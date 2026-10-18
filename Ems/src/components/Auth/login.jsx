import React, {  useState } from 'react'
 

const login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e) => {  
    e.preventDefault();
    
    handleLogin(email,password)

    setEmail('');
    setpassword('');
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-500 rounded-2xl'>
            <h1 className='text-4xl font-bold text-gray-600 flex justify-center pt-5'>Login </h1>
            <form 
            onSubmit={(e)=>
             handleSubmit(e) 
            }
            
            className='flex flex-col gap-3 p-10'>
                <input  
                value={email}
                onChange={(e)=> {setEmail(e.target.value)}}
                type="email"
                 required placeholder='Enter your Email'  
                className='border-1 text-xl rounded-md p-3 outline-none bg-transparent border-emerald-600 '/>
                <input
                
                value={password}
                onChange={(e)=> {setpassword(e.target.value)}}
                
                type="password" required placeholder='Enter your Password'  className='border-1 text-xl rounded-md outline-none border-emerald-600 p-3' />
                <button className='text-2xl bg-emerald-500 rounded-md px-5 py-3 cursor-pointer'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default login