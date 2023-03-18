import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../cards/productCard/ProductCard";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const { data } = await axios.get(`featured-products`);
      setFeaturedProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-50">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <h1 className="text-capitalize pb-3 border-bottom mb-5">Featured products</h1>
          </div>

          <div className="col-12">
            <div className="row g-4 g-xl-5">
              {featuredProducts?.map((product) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;