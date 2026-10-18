import { useState , createContext} from 'react'
 
import './App.css'
import Home from './components/Home'

export const MyContext = createContext();



function App() {

  let [color , setcolor] = useState("light");
  const [name , setName ] = useState("Anand")

  const [value , setValue] = useState(0);


  return (
    <>
    <MyContext.Provider value={{color , setcolor, value , setValue, name}}>
        <Home value={{name, setName}}/>       
    </MyContext.Provider>
    </>
  )
}

export default App
