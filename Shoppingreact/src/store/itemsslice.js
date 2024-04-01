import {createSlice} from "@reduxjs/toolkit";


const itemslice=createSlice({
name:'items',
initialState:[],
reducers:{
    addInitialItems:(state,action)=>{
        return action.payload;
    }
}
});

export const itemsActions=itemslice.actions;

export default itemslice;

