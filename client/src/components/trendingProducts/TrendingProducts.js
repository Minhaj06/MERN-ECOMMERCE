import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./trendingProducts.css";

function TrendingProducts() {
  return (
    <div className="mt-50">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <h1 className="text-capitalize">Trending products</h1>
            <hr className="mb-5" />
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <div className="row g-5">
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trendingProductCard productCard">
                      <div className="row">
                        <div className="col-4 trendingProductImg productImg">
                          <NavLink to={`/product/${445}`}>
                            <img
                              className="w-100 h-100"
                              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/featured-card-1.png"
                              alt="img"
                            />
                          </NavLink>
                        </div>
                        <div className="col-8 trendingProductDetails productDetails">
                          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
                            <NavLink
                              className="hoverLine hoverSecondary"
                              to={`/product/${445}`}
                            >
                              Men slip on shoes casual with arch support insoles
                            </NavLink>
                          </h4>
                          <div className="mb-4">
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <AiFillStar style={{ color: "#FF9529" }} />
                            <small className="ms-3 lightColor">(1,133)</small>
                          </div>
                          <h4 className="fs-18 mb-3">
                            <span className="themeColor me-3">$54.40</span>
                            <span className="lightColor fs-13 text-decoration-line-through">
                              $72.50
                            </span>
                          </h4>
                          <p className="fs-14 lightColor mb-0">2,194 sold</p>
                          <p className="fs-14 lightColor mb-0 text-capitalize">
                            Free shipping
                          </p>
                          <p className="fs-14 themeColor mb-0">Stock: 14 left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
