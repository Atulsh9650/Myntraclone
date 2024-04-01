import Homeitem from "../components/Homeitem";
import { useSelector } from "react-redux";

function Home() {
  const items=  useSelector(store => store.items);
    return ( 
      <>
      <center className="fw-bold fs-2 mt-3">Featured Products</center>
        <main>
        <div className="items-container">
        {items.map((item)=>(
            <Homeitem key={item.id} item={item}/>
    ))}
        </div>
    </main>
    </>
     );
}

export default Home;