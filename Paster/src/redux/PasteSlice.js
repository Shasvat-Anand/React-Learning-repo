import { createSlice } from '@reduxjs/toolkit' 

import toast from 'react-hot-toast'
 
const initialState = {
  pastes:localStorage.getItem("pastes")
  ?  JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const PasteSlice = createSlice({
  name: 'paste',  
  initialState,
  reducers: {
     addToPaste : (state, action)=>{

        const paste = action.payload
        state.pastes.push(paste);
         
        localStorage.setItem("pastes" , JSON.stringify(state.pastes))
        toast.success("Paste is creted")


     },

     updateToPaste : (state, action)=>{

      const paste = action.payload;
      const index = state.pastes.findIndex((item)=> item._id === paste._id);

      if(index >= 0){
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste is updated")
      }
      else{
        toast.error("Not found");
      }

     },

     resetAllpaste : (state, action)=>{
      state.pastes = [];
      localStorage.removeItem("pastes")

     },

     removeFromPaste : (state, action)=>{
      const pasteId = action.payload;

      const index = state.pastes.findIndex((item)=> item._id === pasteId)

      if(index >= 0){
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed")
      }
      else{
        toast.error("Not found")
      }

     }


  }
})
 
export const { addToPaste, updateToPaste, resetAllpaste, removeFromPaste } = PasteSlice.actions
 
 

export default PasteSlice.reducer