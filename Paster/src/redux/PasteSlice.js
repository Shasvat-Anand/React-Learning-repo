import { createSlice } from '@reduxjs/toolkit' 

import toast from 'react-hot-toast'
 
const initialState = {
  pastes : localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const PasteSlice = createSlice({
  name: 'paste',  
  initialState,
  reducers: {
     addToPaste : (state, action)=>{

        const paste = action.payload
        state.pastes.push(JSON.stringify(paste));
        console.log(state.pastes)
        localStorage.setItem("pastes" , state.pastes)
        toast.success("Paste is creted")


     },

     updateToPaste : (state, action)=>{

     },

     resetAllpaste : (state, action)=>{

     },

     removeFromPaste : (state, action)=>{

     }


  }
})
 
export const { addToPaste, updateToPaste, resetAllpaste, removeFromPaste } = PasteSlice.actions
 
 

export default PasteSlice.reducer