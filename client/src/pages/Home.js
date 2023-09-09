import React from "react";
// import Jumbotron from "../components/cards/Jumbotron";
import HomeCarousel from "../components/homeCarousel/HomeCarousel";
import { useAuth } from "../context/auth";
import TrendingProducts from "../components/trendingProducts/TrendingProducts";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
import AllProducts from "../components/allProducts/AllProducts";
import SubscribeSection from "../components/subscribeSection/SubscribeSection";

const Home = () => {
  const { auth, setAuth } = useAuth();

  return (
    <div>
      <HomeCarousel />
      <TrendingProducts />
      <FeaturedProducts />
      <AllProducts />
      <SubscribeSection />
      {/* <Jumbotron title="Home" subtitle="Welcome to my first react ecommerce" />
      <div className="container-fluid">
        <pre className="mt-4">{JSON.stringify(auth, null, 4)}</pre>
      </div> */}
    </div>
  );
};

export default Home;
