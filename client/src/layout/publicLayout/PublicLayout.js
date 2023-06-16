import { Fragment } from "react";
import TopNav from "../../components/nav/TopNav";
import SearchNav from "../../components/nav/SearchNav";
import { Outlet } from "react-router-dom";
import MainMenu from "../../components/nav/MainMenu";

const PublicLayout = () => {
  return (
    <Fragment>
      <TopNav />
      <MainMenu />
      <SearchNav />
      <Outlet />
    </Fragment>
  );
};

export default PublicLayout;
