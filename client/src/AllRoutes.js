import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Shop from "./pages/Shop";
import PrivateRoute from "./components/routes/PrivateRoute";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Secret from "./pages/Secret";
import AdminCategory from "./pages/admin/Category";
import Search from "./pages/Search";
import AdminLayout from "./layout/adminLayout/AdminLayout";
import PublicLayout from "./layout/publicLayout/PublicLayout";

const AllRoutes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* Public Layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="user" element={<UserDashboard />} />
              <Route path="secret" element={<Secret />} />
              {/* Add more routes for the user dashboard */}
            </Route>
          </Route>

          {/* Admin Layout */}
          <Route element={<AdminLayout />}>
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/category" element={<AdminCategory />} />
            {/* Add more routes for the admin dashboard */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AllRoutes;
