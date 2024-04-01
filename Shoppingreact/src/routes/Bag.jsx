import Bagitem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";
import { useDispatch, useSelector } from "react-redux";
import Nobagitems from "../components/Nobagitems";
import { bagActions } from "../store/bagslice";

const Bag =()=>{
  const items = useSelector(store => store.items);
  const bagitems = useSelector(store => store.bag);

  const dispatch =useDispatch();


  const boughtitems = [];

  // Iterate over the bagitems array
  bagitems.forEach(itemid => {
    // Find the item in the items array that matches the itemid
    const matchedItem = items.find(item => item.id === itemid);
    // If a matching item is found, add it to the boughtitems array
    if (matchedItem) {
      boughtitems.push(matchedItem);
    }
    console.log(boughtitems);
  });
  
  function emptycart(){
      dispatch(bagActions.emptycart());
  };
 return (  
   <main>
      <div className="bag-page">
        <div className="bag-items-container">
        {boughtitems.length>0 && <button className="emptycartbutton btn btn-danger" onClick={emptycart}>Empty cart</button>}
        {boughtitems.length>0 ?(boughtitems.map((item)=>(
          <Bagitem key={item.id} item={item} />
        ))):<Nobagitems />}
        </div>
        <Bagsummary  boughtitems={boughtitems}/>
      </div>
    </main>
 );
};
export default Bag;