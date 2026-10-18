import React, { useContext } from 'react'
import './App.css'
import './index.css'
import { useEffect ,useState} from 'react'
 
import Login from './components/Auth/login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/Authprovider'
 
 

function App() {


  const [user, setuser] = useState(null)
  const [loggedinuserdata, setloggedinuserdata] = useState(null)
  const [userData,setUserdata] = useContext(AuthContext)
  

  useEffect(() => {  
    
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){       
        const userdata = JSON.parse(loggedInUser)
        setuser(userdata.role)
        setloggedinuserdata(userdata.data)
      }

    
  },[])
  
  
  


  const HandleLogin = (email,password) =>{
      if(email == 'admin@me.com' && password == '123'){
        setuser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))  
      }
      else if(userData ){
        const employee = userData.find((e)=>email == e.email && password == e.password)
        if(employee){

          setuser('employee')
          setloggedinuserdata(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee' , data:employee}))    
          
        }
      }
      else{
        alert('Invalid Credentials');
      }
  } 
  


  return (
    <> 
     {!user ? <Login handleLogin={HandleLogin}/>:  ''}

     {user == 'admin' ? <AdminDashboard  changeUser={setuser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={loggedinuserdata} />:null ) }
       


     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
    </>
  )
}

export default App
