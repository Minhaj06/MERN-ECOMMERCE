import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./productDetails.css";
import productPlaceholderImg from "../../assets/images/productPlaceholder.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import loadPhotos from "../../utils/loadPhotos";
import arrayBufferToBase64 from "../../utils/arrayBufferToBase64";
import Stars from "../../components/stars/Stars";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Collapse from "react-bootstrap/esm/Collapse";
import FullScreenLoader from "../../components/FullScreenLoader";
import { useCart } from "../../context/cart";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState();
  const [photos, setPhotos] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [activeCollapse, setActiveCollapse] = useState(null);

  // Context
  const [cart, setCart] = useCart();

  const handleCollapse = (id) => {
    setActiveCollapse(activeCollapse === id ? null : id);
  };

  // hooks
  const { slug } = useParams();

  useEffect(() => {
    if (slug) loadProduct();
  }, [slug]);

  useEffect(() => {
    if (product?._id) fetchPhotos();
  }, [product?._id]);

  const loadProduct = async (req, res) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/product/${slug}`);
      setProduct(data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const fetchPhotos = async () => {
    try {
      const data = await loadPhotos(product?._id);
      setPhotos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const dummySliderImages = [
    {
      original: productPlaceholderImg,
      thumbnail: productPlaceholderImg,
    },
    {
      original: productPlaceholderImg,
      thumbnail: productPlaceholderImg,
    },
    {
      original: productPlaceholderImg,
      thumbnail: productPlaceholderImg,
    },
    {
      original: productPlaceholderImg,
      thumbnail: productPlaceholderImg,
    },
    {
      original: productPlaceholderImg,
      thumbnail: productPlaceholderImg,
    },
    {
      original: productPlaceholderImg,
      thumbnail: productPlaceholderImg,
    },
  ];

  const sliderImages = [];
  if (photos.length > 0) {
    photos.map((photo) => {
      const imageObj = {
        original: arrayBufferToBase64(photo.data.data),
        thumbnail: arrayBufferToBase64(photo.data.data),
      };
      sliderImages.push(imageObj);
    });
  }

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <section className="my-50">
        <div className="container">
          <div className="row g-5 position-relative mb-4">
            <div className="col-12 col-lg-6 sticky-lg-top" style={{ height: "fit-content" }}>
              {/* <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                style={{ zIndex: 1021 }}
              >
                <div
                  class="spinner-border text-light"
                  role="status"
                  style={{ width: "3.5rem", height: "3.5rem" }}
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div> */}
              <div className="">
                <ReactImageGallery
                  items={sliderImages.length > 0 ? sliderImages : dummySliderImages}
                  showIndex={true}
                  slideOnThumbnailOver={true}
                  autoPlay={true}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6" style={{ height: "1000px" }}>
              <div className="h-100">
                <h1 className="fontPoppins fs-40 fw-bold mb-3">{product?.name}</h1>
                <p>
                  <Stars size={20} />{" "}
                  <span className="lightColor">{product?.rating} reviews</span>{" "}
                  <Link to="add-review" className="text-capitalize hoverable fw-semibold">
                    Add a review
                  </Link>
                </p>
                <p className="mb-4">
                  <span className="badge rounded-pill bg-danger             bg-opacity-10 text-success">
                    In Stock
                  </span>
                </p>
                <h4 className="fs-2 themeColor">৳{product?.price}</h4>

                <div className="row gx-5 my-5">
                  <div className="col-5 d-flex">
                    <div className="d-flex w-100 align-items-center text-nowrap border px-3 rounded-pill">
                      <button
                        onClick={() => setCartQuantity((prevQuantity) => prevQuantity - 1)}
                        disabled={cartQuantity < 2}
                        style={{ width: "3.5rem", height: "3.5rem" }}
                        className="btn bgLight2 rounded-circle flex-shrink-0 d-flex justify-content-center align-items-center hoverable"
                      >
                        <FaMinus />
                      </button>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        className="form-control text-center border-0 shadow-none fs-2"
                        value={cartQuantity}
                        onChange={(e) => setCartQuantity(parseInt(e.target.value))}
                        readOnly
                      />
                      <button
                        onClick={() => setCartQuantity((prevQuantity) => prevQuantity + 1)}
                        disabled={cartQuantity > 99}
                        style={{ width: "3.5rem", height: "3.5rem" }}
                        className="btn bgLight2 rounded-circle flex-shrink-0 d-flex justify-content-center align-items-center hoverable"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="col-7">
                    <button
                      className="btn btnPrimary py-12 rounded-pill w-100"
                      onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem("cart", JSON.stringify([...cart, product]));
                        toast.success("Added to cart");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <button className="btn p-0 fw-medium d-flex align-items-center gap-3 hoverable">
                    <AiOutlineHeart size={24} />
                    <span className="text-uppercase">Wishlist</span>
                  </button>
                  <button className="btn p-0 fw-medium d-flex align-items-center gap-3 hoverable">
                    <AiOutlineShareAlt size={24} />
                    <span className="text-uppercase">Share</span>
                  </button>
                </div>

                <div>
                  <button
                    className="btn btnPrimary"
                    onClick={() => handleCollapse(1)}
                    aria-expanded={activeCollapse === 1}
                  >
                    Toggle
                  </button>

                  <Collapse in={activeCollapse === 1}>
                    <p className="border border-danger">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
                      ratione!
                      <br />
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
                      ratione!
                      <br />
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
                      ratione!
                      <br />
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-info" style={{ height: "500px" }}></div>
    </>
  );
};

export default ProductDetails;
