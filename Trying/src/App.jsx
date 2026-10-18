import UserName from './UserName'
import './App.css'
import Product from './Product.jsx'
import LikeButton from './LikeButton.jsx'
import TodoList from './TodoList.jsx'

function App() {
  
  let producttab = {display : "flex" ,
    alignItem : "center", justifyContent: "center", gap : " 20px",  margin : "10px" , padding : "20px"}

  return (
    <>
    <h2>Black friday Deals</h2>
    <div style={producttab}>
    <Product title="Pencil" id = {0}/>
    <Product title="NoteBook" id = {1}/>
    <Product title="Parmanent Marker" id = {2}/>


    </div>
    <LikeButton/>

    {/* <TodoList/> */}
        
    </>
  )
}

export default App
