import { useState } from 'react'
 
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './component/Home'
import AllPaste from './component/AllPaste'
import ViewPaste from './component/ViewPaste'

function App() {

  const router = createBrowserRouter(
    [
      {
        path : "/",
        element : <div>
          <NavBar/>
          <Home/>
        </div>
      },
      {
        path : "/paste",
        element : <div>
          <NavBar/>
          <AllPaste/>
        </div>
      },
      {
        path : "/paste/:id",
        element : <div>
          <NavBar/>
          <ViewPaste/>
        </div>
      },

    ]
  )
   

  return (
    <>
        <RouterProvider router={router}></RouterProvider>

     
    </>
  )
}

export default App
