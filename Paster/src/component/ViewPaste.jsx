import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ViewPaste = () => {

  const {id} = useParams();

  const allpastes = useSelector((state)=> state.paste.pastes);

  const paste = allpastes.find((item)=> item._id === id);


  
return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">

       
        <h1 className="text-3xl font-bold tracking-tight">
          View
          <span className="text-purple-400">Paste</span>
        </h1>

        
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3
                       text-slate-100 placeholder-slate-500 outline-none transition
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            type="text"
            placeholder="Enter your title"
            value={paste.title}
            disabled 
            onChange={(e) => setTitle(e.target.value)}
          />
          <button 
            className="cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-medium text-white
                       shadow-lg shadow-emerald-600/20 transition
                       hover:bg-emerald-500 active:scale-95"
          >
            <Link to={`/?pasteId=${paste._id}`}>Edit Paste</Link>

          </button>
        </div>

        {/* Content */}
        <textarea
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4
                     text-slate-100 placeholder-slate-500 outline-none transition
                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
          value={paste.content}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your content here"
          rows={18}
        ></textarea>
      </div>
    </div>
  );
};

 
export default ViewPaste;
