import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LazyLoader from "./components/LazyLoader";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Shop = lazy(() => import("./pages/Shop"));
const PrivateRoute = lazy(() => import("./components/routes/PrivateRoute"));
const UserDashboard = lazy(() => import("./pages/user/Dashboard"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Secret = lazy(() => import("./pages/Secret"));
const Search = lazy(() => import("./pages/Search"));
const PublicLayout = lazy(() => import("./layout/publicLayout/PublicLayout"));
const AdminLayout = lazy(() => import("./layout/adminLayout/AdminLayout"));
const Category = lazy(() => import("./pages/admin/Category"));
const ProductDetails = lazy(() => import("./pages/productDetails/ProductDetails"));

const AllRoutes = () => {
  const admin = "/dashboard/admin";

  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            {/* Public Layout */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/search" element={<Search />} />
              <Route path="/product/:slug" element={<ProductDetails />} />

              {/* Private Route */}
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="user" element={<UserDashboard />} />
                <Route path="secret" element={<Secret />} />
                {/* Add more routes for the user dashboard */}
              </Route>
            </Route>

            {/* Admin Layout */}
            <Route element={<AdminLayout />}>
              <Route path={`${admin}`} element={<AdminDashboard />} />
              <Route path={`${admin}/category`} element={<Category />} />
              {/* Add more routes for the admin dashboard */}
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default AllRoutes;
