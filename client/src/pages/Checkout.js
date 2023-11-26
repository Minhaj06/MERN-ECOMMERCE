import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import UserBreadcrumb from "../components/breadcrumb/UserBreadcrumb";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { ShoppingCartOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import {
  isValidPhoneNumber,
  formatPhoneNumber,
  formatAndValidatePhoneNumber,
} from "../utils/validation";

const Checkout = () => {
  const { auth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const billingAddress = location?.state?.billingAddress;

  // State
  const [shippingAddress, setShippingAddress] = useState({
    email: "",
    firstName: "",
    lastName: "",
    division: "",
    district: "",
    postalCode: "",
    address: "",
    phoneNumber: "443",
  });

  useEffect(() => {
    if (billingAddress) {
      setShippingAddress({
        email: auth?.user?.email,
        firstName: auth?.user?.firstName,
        lastName: auth?.user?.lastName,
        address: auth?.user?.address,
        phoneNumber: auth?.user?.phoneNumber,
        division: billingAddress?.division,
        district: billingAddress?.district,
        postalCode: billingAddress?.postalCode,
      });
    } else {
      navigate("/cart");
    }
  }, [location, auth?.user]);

  const inputFields = [
    { label: "Email", name: "email", type: "email" },
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Division", name: "division", readOnly: true, disabled: true },
    { label: "District", name: "district", readOnly: true, disabled: true },
    {
      label: "Zip/Postal Code",
      name: "postalCode",
      readOnly: true,
      disabled: true,
      type: "text",
    },
    { label: "Street Address", name: "address" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      setShippingAddress((prevAddress) => ({
        ...prevAddress,
        [name]: numericValue,
      }));
    } else {
      setShippingAddress((prevAddress) => ({
        ...prevAddress,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      firstName,
      lastName,
      division,
      district,
      postalCode,
      address,
      phoneNumber,
    } = shippingAddress;

    if (!email) {
      toast.error("Email cannot be empty!");
      return;
    }

    if (!firstName) {
      toast.error("First Name cannot be empty!");
      return;
    }
    if (!lastName) {
      toast.error("Last Name cannot be empty!");
      return;
    }
    if (!division) {
      toast.error("Division cannot be empty!");
      return;
    }
    if (!district) {
      toast.error("District cannot be empty!");
      return;
    }
    if (!postalCode) {
      toast.error("Postal Code cannot be empty!");
      return;
    }
    if (!address) {
      toast.error("Address cannot be empty!");
      return;
    }
    if (!phoneNumber) {
      toast.error("Phone Number cannot be empty!");
      return;
    }
  };

  return (
    <section style={{ marginTop: "5rem", marginBottom: "7rem" }}>
      <div className="container">
        <div className="mb-5">
          <UserBreadcrumb
            items={[
              {
                title: (
                  <>
                    <ShoppingCartOutlined /> <span>Cart</span>
                  </>
                ),
                link: "/cart",
                onClick: () => {
                  navigate("/cart", { state: { billingAddress: billingAddress } });
                },
              },
              {
                title: (
                  <>
                    <FaShippingFast /> <span>Checkout</span>
                  </>
                ),
              },
            ]}
          />
          <h1 className="display-4 fontPoppins fw-bold mt-2">Checkout</h1>
        </div>

        <div className="row g-5">
          <div className="col-lg-6 sticky-lg-top" style={{ height: "fit-content" }}>
            <div className="shadow p-5 bg-light">
              <h1 className="display-4 fontPoppins mb-5">Shipping Address</h1>

              <form onSubmit={handleSubmit}>
                {inputFields.map((field) => (
                  <div className="mb-5" key={field.name}>
                    <label className="label-control mb-2">
                      {field.label} <span className="text-danger fs-3">*</span>
                    </label>
                    <input
                      type={field?.type || "text"}
                      className="form-control shadow-sm px-4 py-2"
                      name={field.name}
                      value={shippingAddress[field.name] || ""}
                      onChange={handleInputChange}
                      readOnly={field?.readOnly}
                      disabled={field?.disabled}
                    />
                  </div>
                ))}
                <div className="text-center mt-50">
                  <button className="btn btnPrimary rounded-pill px-50 py-4">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 sticky-lg-top" style={{ height: "fit-content" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
