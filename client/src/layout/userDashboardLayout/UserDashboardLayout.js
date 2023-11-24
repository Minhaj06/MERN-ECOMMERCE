import React from "react";
import UserMenu from "../../components/nav/UserMenu";
import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <section style={{ margin: "7rem 0" }}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            <div>
              <UserMenu />
            </div>
          </div>
          <div className="col-lg-9">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboardLayout;
