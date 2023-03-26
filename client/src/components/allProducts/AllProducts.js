import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../cards/productCard/ProductCard";
import FullScreenLoader from "../FullScreenLoader";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadProducts();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/products-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`list-products/${page}`);
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/list-products/${page}`);
      setProducts([...products, ...data]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <div className="my-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              {/* <h1 className="text-capitalize pb-3 border-bottom mb-5">Shop our collection</h1> */}
              <h1 className="text-capitalize pb-3 border-bottom mb-5">
                Explore Our Range{" "}
                <sub className="fs-14 fw-normal themeColorSecondaryDark">{`(${products.length} out of ${total})`}</sub>
              </h1>
            </div>

            <div className="col-12">
              <div className="row g-4 g-xl-5">
                {products?.map((product) => (
                  <div className="col-sm-6 col-md-4 col-lg-3" key={product?._id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 text-center mt-40">
              <button
                className="btn btnPrimary fs-3 px-50 py-3"
                disabled={isLoading ? isLoading : products.length === total ? true : isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {isLoading
                  ? "Loading..."
                  : products.length === total
                  ? "No More Products"
                  : "Load More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
