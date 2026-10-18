import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function TodoList (){
    let [tasks, settasks] = useState([]); 


    let [inputtext, settext] = useState("");

    let AddTask = () =>{
       
        console.log("task added");
        
        settasks([...tasks, {tasks : inputtext , id : uuidv4(), isDone: false}]);
         
        settext("");
 
       
        
      
        
    }


    let updateValue = (event) =>{
        let text = event.target.value;
        
        settext(text);
        

        

    }

    let DeleteTask = (id) =>{
         let rm = tasks.filter((items) => items.id != id);
         settasks(rm);
    }

    let Completed = (id)=>{
       let coppy = tasks.map((items) =>{
            if(items.id === id){
                return {
                    ...items, isDone : true,
                }

            }
            return items

       })
        settasks(coppy);
        console.log("edit")
    }

    return (
        <>
        <h4> TodoList </h4>

        <input placeholder="add a taks" value={inputtext}   onChange={updateValue} />
        <br />
        <button onClick={AddTask}>Add</button>

        <hr />
        <h3>Your Tasks</h3>
        
        <ul>
          
         
            {tasks.map((items) =>(
                

                <li key={items.id} >
                    
                    <span style={{textDecoration : items.isDone ? "line-through" : "none"}}> {items.tasks}</span>
                     
                    <p>{items.isDone} </p>
                    &nbsp;
                    <button onClick={() => DeleteTask(items.id)}>Delete</button>
                    <button onClick={() => Completed(items.id)}> {items.isDone ? " Completed" : "Mark as Completed"}  </button>



                </li>
                 
                
            ))
            }
            
        </ul>



        </>
    );
}