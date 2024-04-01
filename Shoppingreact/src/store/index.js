import {configureStore} from "@reduxjs/toolkit";
import itemslice from "./itemsslice";
import fetchstatusslice from "./fetchstatusslice";
import bagslice from "./bagslice";

const mainstore =configureStore({
    reducer:{
        items:itemslice.reducer,
        fetchstatus:fetchstatusslice.reducer,
        bag:bagslice.reducer,
    }
});

export default mainstore;