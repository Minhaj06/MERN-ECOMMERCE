import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactImageGallery from "react-image-gallery";
import Collapse from "react-bootstrap/esm/Collapse";
import Stars from "../../components/stars/Stars";
import FullScreenLoader from "../../components/FullScreenLoader";
import { useCart } from "../../context/cart";
import { toast } from "react-hot-toast";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import "react-image-gallery/styles/css/image-gallery.css";
import loadPhotos from "../../utils/loadPhotos";
import arrayBufferToBase64 from "../../utils/arrayBufferToBase64";
import productPlaceholderImg from "../../assets/images/productPlaceholder.png";
import "./productDetails.css";
import {Rate} from "antd"

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

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

const ProductDetails = () => {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState();
  const [photos, setPhotos] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [activeCollapse, setActiveCollapse] = useState(3);
  const [rating, setRating] = useState(0)

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

  const sliderImages = useMemo(() => {
    const images = [];
    if (photos.length > 0) {
      photos.forEach((photo) => {
        const imageObj = {
          original: arrayBufferToBase64(photo.data.data),
          thumbnail: arrayBufferToBase64(photo.data.data),
        };
        images.push(imageObj);
      });
    }
    return images.length > 0 ? images : dummySliderImages;
  }, [photos]);

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
              <div className="me-xl-3 me-xxl-4">
                <ReactImageGallery
                  items={sliderImages.length > 0 ? sliderImages : dummySliderImages}
                  showIndex={true}
                  slideOnThumbnailOver={true}
                  autoPlay={true}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6" style={{ minHeight: "1000px" }}>
              <div className="h-100 ms-xl-3 ms-xxl-4">
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

                <div className="d-flex align-items-center gap-5 mb-50">
                  <button className="btn p-0 fw-medium d-flex align-items-center gap-3 hoverable">
                    <AiOutlineHeart size={24} />
                    <span className="text-uppercase">Wishlist</span>
                  </button>
                  <button className="btn p-0 fw-medium d-flex align-items-center gap-3 hoverable">
                    <AiOutlineShareAlt size={24} />
                    <span className="text-uppercase">Share</span>
                  </button>
                </div>

                <div className="border-top py-12">
                  <h3
                    className="text-capitalize fs-22 d-flex align-items-center gap-3"
                    role="button"
                    onClick={() => handleCollapse(1)}
                    aria-expanded={activeCollapse === 1}
                  >
                    {activeCollapse === 1 ? <FaMinus size={12} /> : <FaPlus size={12} />}

                    <span>Information</span>
                  </h3>

                  <Collapse in={activeCollapse === 1}>
                    <div className="">
                      <div className="ps-4 ms-3 pt-4 pb-2 fs-14">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td className="text-uppercase fw-medium">Brand</td>
                              <td className="text-capitalize">Gucci</td>
                            </tr>
                            <tr>
                              <td className="text-uppercase fw-medium">Activity</td>
                              <td className="text-capitalize">Running</td>
                            </tr>
                            <tr>
                              <td className="text-uppercase fw-medium">Material</td>
                              <td className="text-capitalize">Fabric cotton</td>
                            </tr>
                            <tr>
                              <td className="text-uppercase fw-medium">Gender</td>
                              <td className="text-capitalize">Male</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Collapse>
                </div>

                <div className="border-top py-12">
                  <h3
                    className="text-capitalize fs-22 d-flex align-items-center gap-3"
                    role="button"
                    onClick={() => handleCollapse(2)}
                    aria-expanded={activeCollapse === 2}
                  >
                    {activeCollapse === 2 ? <FaMinus size={12} /> : <FaPlus size={12} />}

                    <span>Details</span>
                  </h3>

                  <Collapse in={activeCollapse === 2}>
                    <div className="">
                      <div className="ps-4 ms-3 pt-4 pb-2 fs-14">
                        <p className="lh-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                          repudiandae libero ipsa, dignissimos exercitationem animi enim, velit
                          fugiat culpa aperiam vitae veritatis incidunt molestiae neque.
                          <br />
                          <br />
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
                          sunt incidunt, quibusdam praesentium nostrum.
                        </p>
                      </div>
                    </div>
                  </Collapse>
                </div>

                <div className="border-top py-12">
                  <h3
                    className="text-capitalize fs-22 d-flex align-items-center gap-3"
                    role="button"
                    onClick={() => handleCollapse(3)}
                    aria-expanded={activeCollapse === 3}
                  >
                    {activeCollapse === 3 ? <FaMinus size={12} /> : <FaPlus size={12} />}

                    <span>
                      Reviews <sup className="textColor fs-5 ms-2">2.5k</sup>
                    </span>
                  </h3>

                  <Collapse in={activeCollapse === 3}>
                    <div className="">
                      <div className="ps-4 ms-3 pt-4 pb-2 fs-14">
                        <div className="border-top py-12 mt-2">
                          <h4 className="lightColor fs-22 mb-4">Customer Reviews</h4>
                          <h4 className="fs-40 d-flex align-items-center mb-4">
                            <span>4.9</span>
                            <span className="fw-light lightColor">/</span>
                            <span className="fs-5 themeColorSecondaryDark">2,453 Reviews</span>
                          </h4>
                          <button className="btn btnDark w-100 py-12 rounded-pill mb-5">
                            Write review
                          </button>

                          <div>
                            <div className="py-5">
                              <h4 className="text-uppercase fw-semibold mb-0">
                                Review by Abdullah
                              </h4>
                              <p className="lightColor">
                                <small>On 10/09/2023</small>
                              </p>
                              <div className="my-3">
                                <Stars />
                              </div>
                              <h3 className="text-uppercase fs-2 mb-3">Awesome product!</h3>
                              <p className="lh-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos voluptatibus sapiente soluta provident accusantium
                                quas.
                              </p>
                            </div>

                            <div className="py-5 border-top">
                              <h4 className="text-uppercase fw-semibold mb-0">
                                Review by Abdullah
                              </h4>
                              <p className="lightColor">
                                <small>On 10/09/2023</small>
                              </p>
                              <div className="my-3">
                                <Stars />
                              </div>
                              <h3 className="text-uppercase fs-2 mb-3">Awesome product!</h3>
                              <p className="lh-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos voluptatibus sapiente soluta provident accusantium
                                quas.
                              </p>
                            </div>

                            <div className="text-end">
                              <Link className="fs-4 fw-medium hoverable" to="#">
                                View all reviews
                                <FiArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="border-top py-12 mt-2">
                          <h4 className="lightColor fs-22 mb-4">Write a review</h4>

                          <div className="d-flex align-items-center gap-4">
                            <p className="fs-3 mb-0 mt-2">Are you satisfied enough?</p>
                            <div>
                              <Rate style={{color: "#f59c3a"}} tooltips={desc} onChange={setRating} value={rating} />
                              {rating ? <span className="ant-rate-text text-capitalize fs-4 fw-medium">{desc[rating - 1]}</span> : ''}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
