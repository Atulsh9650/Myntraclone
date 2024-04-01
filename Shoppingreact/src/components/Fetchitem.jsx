import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsslice";
import { fetchSliceActions } from "../store/fetchstatusslice";

function Fetchitem() {
    const fetchstatus=useSelector(store => store.fetchstatus);
    const dispatch=useDispatch();

    useEffect(()=>{
      if(fetchstatus.fetchdone) return;

      const controller=new AbortController();
      const signal=controller.signal;

      dispatch(fetchSliceActions.markfetchingstarted());

      fetch("http://localhost:8080/items",{signal})
      .then((res)=> res.json())
      .then(({items})=>{
        dispatch(fetchSliceActions.markfetchdone());
        dispatch(fetchSliceActions.markfetchingfinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
    },[fetchstatus]);

    return ( 
     <></>
     );
}

export default Fetchitem;