import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetchitem from "../components/Fetchitem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Banner from "../components/Banner";


function App() {
  const fetchstatus=useSelector(store => store.fetchstatus);
  return (
    <>
    <Header />
    <Banner />
    <Fetchitem />
    {fetchstatus.currentlyfetching ? <LoadingSpinner /> : <Outlet />}
    <Footer />
    </>
  );
}

export default App;
