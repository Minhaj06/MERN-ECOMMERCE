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
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <div className="row g-5">
                  {trendingProducts?.map((product) => (
                    <div className="col-sm-6" key={product?._id}>
                      <ProductCard product={product} isTrending={true} />
                      {/* <div className="trendingProductCard productCard h-100">
                        <div className="row h-100">
                          <div className="col-4 trendingProductImg productImg">
                            <Link to={`/product/${product?.slug}`}>
                              <img
                                className="w-100 h-100"
                                style={{ objectFit: "cover", minHeight: "12rem" }}
                                src={`${process.env.REACT_APP_API}/product/photo/${product?._id}`}
                                alt={product?.name}
                              />
                            </Link>
                          </div>
                          <div className="col-8 trendingProductDetails productDetails">
                            <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                              <Link
                                className="hoverLine hoverSecondary"
                                to={`/product/${445}`}
                              >
                                {product?.name}
                              </Link>
                            </h4>
                            <div className="mb-4">
                              <AiFillStar style={{ color: "#FDCC0D" }} />
                              <AiFillStar style={{ color: "#FDCC0D" }} />
                              <AiFillStar style={{ color: "#FDCC0D" }} />
                              <AiFillStar style={{ color: "#FDCC0D" }} />
                              <AiFillStar style={{ color: "#FDCC0D" }} />
                              <small className="ms-3 lightColor">
                                ({String(product?.rating).padStart(2, "0")})
                              </small>
                            </div>
                            <h4 className="fs-18 fw-normal mb-3">
                              <span className="themeColor me-3">
                                {product?.price?.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "BDT",
                                })}
                              </span>
                              <span className="lightColor fs-13 text-decoration-line-through d-none">
                                $72.50
                              </span>
                            </h4>
                            <p className="fs-14 lightColor mb-0">{`${String(
                              product?.sold
                            ).padStart(2, 0)} sold`}</p>
                            <p className="fs-14 lightColor mb-0 text-capitalize">
                              {product?.shipping === true ? "Free shipping" : ""}
                            </p>
                            <p className="fs-14 themeColor mb-0">
                              {`${
                                product?.quantity <= 10
                                  ? product?.quantity >= 1
                                    ? `Stock ${String(
                                        product?.quantity - product?.sold
                                      ).padStart(2, 0)} left`
                                    : "Out of stock"
                                  : ""
                              }`}
                            </p>
                          </div>
                        </div>
                      </div> */}
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
