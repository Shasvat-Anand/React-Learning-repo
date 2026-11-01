import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToPaste, updateToPaste } from "../redux/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");

  const [value, setValue] = useState("");

  const [searchParams, setSearchParam] = useSearchParams('');

  const pasteId = searchParams.get("pasteId");
  

  const dispatch = useDispatch();
  const allpastes = useSelector((state) => state.paste.pastes);

  function createPaste() {
    const Paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(30),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPaste(Paste));
    } else {
      dispatch(addToPaste(Paste));
    }

    setTitle("");
    setValue("");
    setSearchParam({});
  }




  useEffect(()=>{  

    if(pasteId){
      const val = allpastes.find((items)=>
      items._id === pasteId
      )   
       

      setTitle(val.title);
      setValue(val.content);
    }


  }, [pasteId])




  
   
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">

       
        <h1 className="text-3xl font-bold tracking-tight">
          {pasteId ? "Edit " : "Create "}
          <span className="text-purple-400">Paste</span>
        </h1>

        
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3
                       text-slate-100 placeholder-slate-500 outline-none transition
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={createPaste}
            className="cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-medium text-white
                       shadow-lg shadow-purple-600/20 transition
                       hover:bg-purple-500 active:scale-95"
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>

        {/* Content */}
        <textarea
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4
                     text-slate-100 placeholder-slate-500 outline-none transition
                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your content here"
          rows={18}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;