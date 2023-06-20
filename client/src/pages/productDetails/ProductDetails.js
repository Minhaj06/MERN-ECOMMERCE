import React from "react";
import "./productDetails.css";

const ProductDetails = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-6 sticky-top" style={{ height: "500px" }}>
              <div className="bg-primary h-100">
                <h1>Left Div</h1>
              </div>
            </div>
            <div className="col-6" style={{ height: "1000px" }}>
              <div className="bg-secondary h-100">
                <h1>Right Div</h1>
              </div>
            </div>
          </div>

          <div className="bg-info" style={{ height: "500px" }}></div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
