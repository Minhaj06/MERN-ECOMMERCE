import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/cards/productCard/ProductCard";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Form from "react-bootstrap/Form";

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
            <div className="row g-4">
              <div className="col-12 mb-4">
                <div className="bgThemeSecondaryDark text-white p-4 rounded shadow">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className="fs-3 fw-light bg-transparent whiteColor shadow-none border-0 hoverableOp"
                        onClick={() => toggleView()}
                      >
                        {isGridView ? (
                          <>
                            <FaBars size={20} /> List View
                          </>
                        ) : (
                          <>
                            <RiLayoutGridFill size={20} /> Grid View
                          </>
                        )}
                      </button>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <span className="text-nowrap fw-light">Sort by</span>
                      <Form.Select className="fs-4">
                        <option value="">Date, new to old</option>
                        <option value="">Date, old to new</option>
                        <option value="">Featured</option>
                        <option value="">Best selling</option>
                        <option value="">Price, low to hight</option>
                        <option value="">Price, hight to low</option>
                        <option value="">Alphabetically, A-Z</option>
                        <option value="">Alphabetically, Z-A</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
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
