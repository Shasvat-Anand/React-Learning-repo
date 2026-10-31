import { createSlice } from '@reduxjs/toolkit' 
 
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