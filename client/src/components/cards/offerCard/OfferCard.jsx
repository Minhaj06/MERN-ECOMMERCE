import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineShareAlt } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import "./offerCard.css";
import productPlaceholderImg from "../../../assets/images/productPlaceholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCart } from "../../../context/cart";
import Stars from "../../stars/Stars";

const OfferCard = ({ product }) => {
  // Context
  const [cart, setCart] = useCart();

  const handleBeforeLoadImg = () => {
    return productPlaceholderImg;
  };
  const handleImgError = (event) => {
    const { target } = event;
    target.onerror = null;
    target.src = productPlaceholderImg;
    return;
  };

  const countStyle = {
    background: "var(--whiteColor)",
    color: "var(--themeColorSecondaryDark)",
    width: "3.2rem",
    height: "3.2rem",
    padding: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  };

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 textColor">
        <div style={countStyle} title="Days">
          {zeroPad(days)}
        </div>
        <div className="fw-medium">:</div>
        <div style={countStyle} title="Hours">
          {zeroPad(hours)}
        </div>
        <div className="fw-medium">:</div>
        <div style={countStyle} title="Minutes">
          {zeroPad(minutes)}
        </div>
        <div className="fw-medium">:</div>
        <div style={countStyle} title="Seconds">
          {zeroPad(seconds)}
        </div>
      </div>
    );
  };

  return (
    <div
      className="offerCard productCard p-5 rounded-4 h-100 bgLight2"
      style={{ border: "2px solid var(--textColor)" }}
    >
      <div className="text-center mb-5">
        <h3 className="text-uppercase fs-2 themeColorSecondaryDark mb-4">Offer ends in</h3>
        <Countdown date={product?.offerEndDate} renderer={renderer} />
      </div>
      <div className="overflow-hidden position-relative">
        <Link className="d-block overflow-hidden rounded-3" to={`/product/${product?.slug}`}>
          <LazyLoadImage
            src={`${process.env.REACT_APP_API}/product/photo/${product?._id}`}
            onError={handleImgError}
            alt={product?.name}
            effect="blur"
            beforeLoad={handleBeforeLoadImg}
          />
        </Link>
        <div className="position-absolute top-0 end-0 mt-4 me-4">
          <span className="productIcon mb-2" title="Add to wishlist">
            <AiOutlineHeart size={20} />
          </span>
          <span
            style={{ top: "4rem" }}
            className={`productIcon disabled ${
              cart.filter((item) => item._id === product?._id).length > 0 && "bgTheme end-0"
            }`}
            title={`${
              cart.find((item) => item._id === product?._id)
                ? "Remove from cart"
                : "Add to cart"
            }`}
            onClick={() => {
              const exists = cart.find((item) => item._id === product?._id);
              if (!exists) {
                setCart([...cart, product]);
                localStorage.setItem("cart", JSON.stringify([...cart, product]));
                toast.success("Added to cart");
              } else {
                const updatedCart = cart.filter((item) => item?._id !== product?._id);
                setCart(updatedCart);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                toast.error("Removed from cart.");
              }
            }}
          >
            <AiOutlineShoppingCart size={20} />
          </span>
          <span style={{ top: "8rem" }} className="productIcon" title="Share">
            <AiOutlineShareAlt size={17} />
          </span>
        </div>

        <div className="position-absolute" style={{ bottom: "1.5rem", right: "1.5rem" }}>
          <span className="productIcon start-0" title="Shop with 30% discount">
            33%
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="fw-medium text-capitalize themeColorDark my-3">
          <Link className="hoverLine hoverSecondary" to={`/product/${product?.slug}`}>
            {product?.name}
          </Link>
        </h2>
        <div>
          <Stars size={18} />
          <small className="ms-3 lightColor">
            ({String(product?.rating).padStart(2, "0")})
          </small>
        </div>
        <h4 className="fs-18 fw-normal mb-4">
          <span className="themeColor me-3">
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
          <span className="lightColor fs-13 text-decoration-line-through d-none">$72.50</span>
        </h4>
        <div>
          <div className="d-flex justify-content-between items-center lightColor">
            <small>Stock: 250</small>
            <small>Sold: 750</small>
          </div>
          <div className="progress mt-2" style={{ height: "4px", backgroundColor: "#d2d7df" }}>
            <div
              className="progress-bar bgThemeSecondary"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
