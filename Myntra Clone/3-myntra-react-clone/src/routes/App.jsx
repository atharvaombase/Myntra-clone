import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Fetchitem from "../components/FetchItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <Fetchitem />
      {!fetchStatus.currentlyFetching ? <Outlet /> : <LoadingSpinner />}
      <Footer />
    </>
  );
}

export default App;
