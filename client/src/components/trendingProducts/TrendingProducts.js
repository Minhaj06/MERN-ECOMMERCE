import React, { useEffect, useState } from "react";
import "./trendingProducts.css";
import axios from "axios";
import ProductCard from "../cards/productCard/ProductCard";

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    loadTrendingProducts();
  }, []);

  const loadTrendingProducts = async () => {
    try {
      const { data } = await axios.get(`trending-products`);
      setTrendingProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-50">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <h1 className="text-capitalize pb-3 border-bottom mb-5">Trending products</h1>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="text-danger">Offer Slider</h2>
              </div>
              <div className="col-lg-8">
                <div className="row g-5">
                  {trendingProducts?.map((product) => (
                    <div className="col-sm-6" key={product?._id}>
                      <ProductCard product={product} isTrending={true} listView={true} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
