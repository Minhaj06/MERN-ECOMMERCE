import React, { useEffect, useState } from "react";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import MegaMenu from "../megaMenu/MegaMunu";
import { useCart } from "../../context/cart";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

// Define the main menu items as an array of objects
const mainMenuItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Women", to: "category/women", megaMenu: true },
  { label: "Men", to: "category/men" },
  { label: "Sports", to: "category/sports" },
];

const MainMenu = () => {
  // Context
  const [cart, setCart] = useCart();

  // state
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalAmount = parseFloat(cart.reduce((total, product) => total + product?.price, 0));
    setTotalPrice(totalAmount);
  }, [cart]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
          <div>
            <h1 className="p-5 bg-success">Hello</h1>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <div className="container">
        <Button variant="danger" className="d-lg-none" onClick={handleShow}>
          Launch
        </Button>

        <div>
          <pre>{JSON.stringify(cart, null, 4)}</pre>
        </div>
      </div> */}

      <Navbar className="mb-4 bg-transparent" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="me-5">
            <Link to="/">
              <img
                src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              {mainMenuItems.map((item, index) => (
                <li className={`nav-item${item?.megaMenu ? " megaMenuLink" : ""}`} key={index}>
                  <NavLink className="nav-link" to={item.to} aria-current="page">
                    {item?.label}
                    {item?.megaMenu && <FiChevronDown size={20} />}
                  </NavLink>
                  {item?.megaMenu && <MegaMenu />}
                </li>
              ))}
            </Nav>

            <div className="menuIcons d-flex align-items-center">
              <div className="topbar-icon-group me-20">
                <NavLink className="text-color-dark" to="/wishlist">
                  <div className="floating-text-icon d-inline-block position-relative">
                    <AiOutlineHeart size={22} />
                    <span className="floating-num">0</span>
                  </div>
                </NavLink>
              </div>
              <div className="topbar-icon-group me-20">
                <NavLink className="text-color-dark" to="/cart">
                  <div className="floating-text-icon d-inline-block position-relative">
                    <AiOutlineShoppingCart size={22} />
                    <span className="floating-num">{cart.length}</span>
                  </div>
                </NavLink>
              </div>
              <div className="totalAmount">
                <small className="fs-14 lightColor">Total</small>
                <h5 className="fs-14">${totalPrice.toFixed(2)}</h5>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainMenu;
