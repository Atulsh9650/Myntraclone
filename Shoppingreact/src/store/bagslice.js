import {createSlice} from "@reduxjs/toolkit";

const bagslice=createSlice({
name:'bag',
initialState:[],
reducers:{
    addtobag:(state,action)=>{
        state.push(action.payload);
    },
    removefrombag:(state,action)=>{
       return state.filter(itemid => itemid!== action.payload);
    },
    emptycart:(stack,action)=>{
      return [];
    }
}
});

export const bagActions=bagslice.actions;

export default bagslice;

