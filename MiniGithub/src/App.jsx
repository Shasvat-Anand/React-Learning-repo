import { createContext, useEffect, useState } from 'react'
 
import './App.css'
import GithubProfile from './component/GithubProfile';
import Repo from './component/Repo';


export const Mycontext = createContext();

function App() {
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState("");

  const [data, setdata] = useState(null)

  const [error, setError] = useState("");
  const [loading , setloading] = useState("")

  const[repoData, setrepoData] = useState(null);



 

  function handleSubmit(e){
    e.preventDefault();

    setSearchUser(username)
  }


  useEffect(()=>{

    

      if(!searchUser) return;
      
        const fetchdata = async ()=>{
          try{
            setError("");
            setloading(true)

            const res = await fetch(`https://api.github.com/users/${searchUser}`)
            
            const result = await res.json()
            if(!res.ok){
              throw new Error( result.message || "user not found")
              
            }
            console.log(result)
            
            setdata(result)
          }catch(err){
            setError(err.message);
            setdata(null)
          }
          finally{
            setloading(false)
          }

      }
     
    
    
    fetchdata()
    
  
  }
  , [searchUser])

  useEffect(()=>{
     const repository = async()=>{

        try{
          setloading(true);
          setError("")

          const val = await fetch(`https://api.github.com/users/${data.login}/repos`)
          
          const repoval = await val.json();
          
          if(!repoval.ok){
            throw new Error( repoval.message || "There is no such repo")
          }
          setrepoData(repoval)
        }
        catch(err){
          if(error) return;
          setError(err.message);
          setrepoData(null)
        }
        finally{
          setloading(false)
        }

    }
    if(data){

      repository();
    }


  },[data])

  
  return (
    <>
      <h1>Learning use Effect </h1>

      <div className="container" >
        <form onSubmit={handleSubmit}>

        <label >Enter your Github Username</label>
        <input type="text" name="username"  placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value)}/>
         <button type='submit'>Submit</button>

        </form>



      </div>

      <div>
        {loading && <h2>Loading...</h2> }
        {error && <h2>{error}</h2> }
       {data === null ? <h1>Search Your Profile</h1> : <Mycontext.Provider value={{repoData, setrepoData}}>   <GithubProfile value={data}/>  </Mycontext.Provider> }
   
      </div>

      
    </>
  )
}

export default App
