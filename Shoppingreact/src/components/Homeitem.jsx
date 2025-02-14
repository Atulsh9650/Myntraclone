import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagslice";
import { IoBagAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function Homeitem({item}) {

    const dispatch=useDispatch();
    const bagitems= useSelector(store => store.bag);

    const elementfound=bagitems.indexOf(item.id)>=0;


 const handleRemovefromBag=()=>{
       dispatch(bagActions.removefrombag(item.id));
 };


  const handleAddtoBag=()=>{
       dispatch(bagActions.addtobag(item.id));
  };

    return (  
    <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementfound ? ( <button className="btn-add-bag btn btn-danger" onClick={handleRemovefromBag}><MdDelete /> Remove</button>)
        :(<button className="btn-add-bag btn btn-success" onClick={handleAddtoBag}><IoBagAdd /> Add to Bag</button>)}
      </div>
    );
}

export default Homeitem;