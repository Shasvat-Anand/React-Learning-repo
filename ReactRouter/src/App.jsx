import react from 'react';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';

 

import './App.css'

import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import DashBoardOverview from './component/DashboardOverview';
import Navbar from './component/Navbar';
import ParamCompo from './component/ParamCompo';

import CourseDetail from './component/CourseDetail';
import Teacher from './component/TeachersDetail';
import Student from './component/StudentsDetail';


  



function App() {
  const router = createBrowserRouter([

    {
      path: '/',

      element:
      <div>
        <Navbar/>
        <Home/>
      </div> 
    },
    {
      path : '/about',
      element: <div>
        <Navbar/>
        <About/>
      </div>  

    },

    {
      path: '/Dashboard',
      element: <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      
      children:[

       {
        index:true,
        element :   <DashBoardOverview />
       },
        {path : "course",
          element :  
            <CourseDetail/>
           
        },
        {path: 'teacher',
          element :  
            <Teacher/>
         
        },{
          path: 'student',
          element :  
            <Student/>
           
        }
      ]
    }
    ,{
      path: '/student/:id',
      element: <div>
        <Navbar/>
        <ParamCompo/>
      </div>
    }
  ]
  )

  

  return (
    <>
      
      <div>
      <RouterProvider router={router} />

      </div>




    </>
    
 
  )
}

export default App
