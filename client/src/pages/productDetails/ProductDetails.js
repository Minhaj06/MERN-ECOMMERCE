import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./productDetails.css";
import productPlaceholderImg from "../../assets/images/productPlaceholder.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import loadPhotos from "../../utils/loadPhotos";
import arrayBufferToBase64 from "../../utils/arrayBufferToBase64";

const ProductDetails = () => {
  // state
  const [product, setProduct] = useState();
  const [photos, setPhotos] = useState([]);

  // hooks
  const { slug } = useParams();

  useEffect(() => {
    if (slug) loadProduct();
  }, [slug]);

  useEffect(() => {
    if (product?._id) fetchPhotos();
  }, [product?._id]);

  const loadProduct = async (req, res) => {
    try {
      const { data } = await axios.get(`/product/${slug}`);
      setProduct(data);
    } catch (err) {
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
              <div className="bg-secondary h-100">
                <h1>Right Div</h1>
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
