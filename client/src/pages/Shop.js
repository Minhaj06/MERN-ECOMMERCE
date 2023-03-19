import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/cards/productCard/ProductCard";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`products`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  // List View Grid View Products
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="my-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="themeColor">Filter Area</h2>
          </div>
          <div className="col-lg-9">
            <div className="row g-4 g-xl-5">
              <div className="col-12">
                <span type="button" onClick={() => toggleView()}>
                  {isGridView ? <FaList size={28} /> : <RiLayoutGridFill size={28} />}
                </span>
              </div>

              {isGridView
                ? products?.map((product) => (
                    <div className="col-sm-6 col-md-4" key={product?._id}>
                      <ProductCard product={product} />
                    </div>
                  ))
                : products?.map((product) => (
                    <div className="col-12" key={product?._id}>
                      <ProductCard product={product} isTrending={true} listView={true} />
                    </div>
                  ))}
              {/* {products?.map((product) => (
                <div className="col-sm-6 col-md-4" key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
