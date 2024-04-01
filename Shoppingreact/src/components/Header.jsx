import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import '../css/header.css';

function Header() {
    
    const bag=useSelector(store => store.bag);

    return (  
      <>
        <div className="header1">
        <header>
        <div className="logo_container">
            <Link to="/"><img className="urban_home" src="images/UrbanGrove.png" alt="urbangrove Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link to="/men">Men</Link>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Beauty</a>
        </nav>
        <div className="action_bar">
             <div className="search_bar2 mt-1 me-1">
              <CiSearch  size={26}/>
             </div>
            <div className="action_container">
                <IoMdPerson />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <FaHeart />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="./bag" >
                <IoBag />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
    </div>
    <div className="header2">
    <header>
    <div className="logo_container">
        <Link to="/"><img className="urban_home" src="images/UrbanGrove.png" alt="urbangrove Home"/></Link>
    </div>
    <div className="search_bar2">
    <CiSearch  size={24}/>
    </div>
    <div className="action_bar">
        <div className="action_container">
            <IoMdPerson />
            <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
            <FaHeart />
            <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="./bag" >
            <IoBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
        </Link>
    </div>
</header>
<header className="d-flex justify-content-center">
<nav className="nav_bar">
  <Link to="/men">Men</Link>
  <a href="#">Women</a>
  <a href="#">Kids</a>
  <a href="#">Beauty</a>
</nav>
</header>
    </div>
    </>
    );
}

export default Header;