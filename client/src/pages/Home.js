import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div>
      <Jumbotron title="Home" subtitle="Welcome to my first react ecommerce" />
      <div className="container-fluid">
        <pre className="mt-4">{JSON.stringify(auth, null, 4)}</pre>
      </div>
    </div>
  );
};

export default Home;
