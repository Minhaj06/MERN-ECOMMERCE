import { Fragment } from "react";
import TopNav from "../../components/nav/TopNav";
import SearchNav from "../../components/nav/searchNav/SearchNav";
import { Outlet } from "react-router-dom";
import MainMenu from "../../components/nav/MainMenu";
import Footer from "../../components/footer/Footer";

const PublicLayout = () => {
  return (
    <Fragment>
      <TopNav />
      <MainMenu />
      <SearchNav />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
