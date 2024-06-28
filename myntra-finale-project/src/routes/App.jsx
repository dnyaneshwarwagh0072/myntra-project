import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Banner from "../components/Banner";
import Title1 from "../components/Title1";
import CategoryItems from "../components/CategoryItem";
import Add_Section from "../components/Add_Section";
import Discount_Section from "../components/Discount_Section";
import SocialMedia from "../components/SocialMedia";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <SocialMedia />
      <Banner />
      <Title1 />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Title1 />
      <CategoryItems />
      <Add_Section />
      <Discount_Section />
      <Footer />
    </>
  );
}

export default App;