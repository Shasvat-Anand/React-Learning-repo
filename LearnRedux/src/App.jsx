import { useState } from "react";
import "./App.css";
import ShowItems from "./ShowItems";
import { useDispatch, useSelector } from "react-redux";
import AddItems from "./redux/actions/AddItems";

function App() {
  const [Items, setItems] = useState("");


  const state = useSelector(state=> state)

  const dispatch = useDispatch();



  // console.log(state)

  function handlesubmit(e) {
    e.preventDefault();
     

    dispatch(AddItems(
      Items
    ))
    console.log("inside handle " , state)

    setItems("")
  }

  return (
    <> 
    
    <div className="Maindiv bg-zinc-800 min-h-screen flex flex-col w-full p-4">
      <div className="text-red-400 text-5xl text-center font-semibold ">
        <h1>Learning about Redux in React</h1>
      </div>

      <div className="border-2 mt-10 border-purple-500 p-4 rounded-xl ">
        <div className="text-white text-3xl ">
          <h3 className="text-orange-400 ">What is redux ? </h3>
          <p>
            Redux is the state management library of JavaScript. using redux to
            overcome the complexity of state management. Redux help to manage
            all the operation while taking a global state which is known as
            store
          </p>
        </div>
        <div className="text-white text-3xl pt-5 ">
          <h3 className="text-orange-400 ">What is react-redux ? </h3>
          <p>
            React Redux is the toolkit which help us to connect and use the
            functionality of redux in the react.
          </p>
        </div>
      </div>

      <div className="mt-10 text-white border-1 rounded-xl p-5 flex items-center justify-center ">
        <form >
          <input
            className="p-4 m-4 text-xl border-1 border-white rounded-xl"
            type="text"
            value={Items}
            placeholder="Enter a item"
            onChange={(e) => setItems(e.target.value)}
          />
          <button
            className="border-1 border-green-400 p-4 rounded-xl bg-cyan-400 text-2xl cursor-pointer hover hover:bg-green-500"
            type="submit"
            onClick={handlesubmit}
          >
            Add item{" "}
          </button>
        </form>
      </div>

      <div  className="mt-10 text-white border-1 rounded-xl p-5   ">
        <ShowItems/>
      </div>
    </div>

    </>
  );
}

export default App;
