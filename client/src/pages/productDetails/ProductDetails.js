import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./productDetails.css";

import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const images = [
    {
      original:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640eb40ced4854677174a4ef",
      thumbnail:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640eb40ced4854677174a4ef",
    },
    {
      original:
        "http://localhost:3000/static/media/productPlaceholder.78dddde09d702fe897e8.png",
      thumbnail:
        "http://localhost:3000/static/media/productPlaceholder.78dddde09d702fe897e8.png",
    },
    {
      original:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640e9081a62831581e493db1",
      thumbnail:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640e9081a62831581e493db1",
    },
    {
      original:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640eb40ced4854677174a4ef",
      thumbnail:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640eb40ced4854677174a4ef",
    },
    {
      original:
        "http://localhost:3000/static/media/productPlaceholder.78dddde09d702fe897e8.png",
      thumbnail:
        "http://localhost:3000/static/media/productPlaceholder.78dddde09d702fe897e8.png",
    },
    {
      original:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640e9081a62831581e493db1",
      thumbnail:
        "https://mern-ecom-server.vercel.app/api/v1/product/photo/640e9081a62831581e493db1",
    },
  ];

  // state
  const [product, setProduct] = useState();

  // hooks
  const { slug } = useParams();

  useEffect(() => {
    if (slug) loadProduct();
  }, [slug]);

  const loadProduct = async (req, res) => {
    try {
      // const { data } = await axios.get(`/product/${slug}`);
      const { data } = await axios.get(`/product/photo/6415324268595c201cee6fe9`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="my-50">
        <div className="container">
          <div className="row g-5 position-relative mb-4">
            <div className="col-12 col-lg-6 sticky-lg-top" style={{ height: "fit-content" }}>
              <div className="">
                <ReactImageGallery
                  items={images}
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
