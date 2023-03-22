import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./productCard.css";
// import productPlaceholderImg from "../../../assets/images/productPlaceholder.avif";
// import { ReactComponent as CategoryIcon } from "../../../assets/images/productPlaceholder.svg";
import productPlaceholderImg from "../../../assets/images/productPlaceholder.png";

import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ product, isTrending, listView }) => {
  const handleBeforeLoadImg = () => {
    return productPlaceholderImg;
  };
  function handleImgError(event) {
    // code to handle image load errors
    const { target } = event;
    target.onerror = null;
    target.src = productPlaceholderImg; // set the default image URL if the product image fails to load
    return;
  }

  // const img = `${process.env.REACT_APP_API}/product/photo/${product?._id}`;
  // console.log(img);

  return (
    <div className={`${isTrending ? "trendingProductCard" : ""} productCard h-100`}>
      <div className={`${isTrending ? "row h-100" : ""}`}>
        <div
          className={`${isTrending ? "col-4" : "mb-20"} ${
            listView ? "pe-sm-4" : ""
          } productImg overflow-hidden`}
        >
          <div className="overflow-hidden">
            <Link to={`/product/${product?.slug}`}>
              <LazyLoadImage
                src={`${process.env.REACT_APP_API}/product/photo/${product?._id}`}
                onError={handleImgError}
                alt={product?.name}
                effect="blur"
                beforeLoad={handleBeforeLoadImg}
              />
            </Link>
          </div>
        </div>
        <div
          className={`${isTrending ? "col-8" : ""} ${
            listView ? "ps-sm-5" : ""
          } productDetails`}
        >
          <h4 className="fs-16 fw-normal text-capitalize themeColorDark mb-3">
            <Link className="hoverLine hoverSecondary" to={`/product/${445}`}>
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
          <p className="fs-14 lightColor mb-0">{`${String(product?.sold).padStart(
            2,
            0
          )} sold`}</p>
          <p className="fs-14 lightColor mb-0 text-capitalize">
            {product?.shipping === true ? "Free shipping" : ""}
          </p>
          <p className="fs-14 themeColor mb-0">
            {`${
              product?.quantity <= 10
                ? product?.quantity >= 1
                  ? `Stock ${String(product?.quantity - product?.sold).padStart(2, 0)} left`
                  : "Out of stock"
                : ""
            }`}
          </p>
          {listView ? (
            <p className="mt-4">
              {product?.description.length > 250
                ? product?.description.substring(0, 250) + "..."
                : product?.description}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
