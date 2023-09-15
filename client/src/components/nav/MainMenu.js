import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import MegaMenu from "../megaMenu/MegaMunu";
import { useCart } from "../../context/cart";
import { Collapse, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { ReactComponent as CategoryIcon } from "../../assets/icons/categoryIcon.svg";
import { BsChevronRight } from "react-icons/bs";

const mainMenuItems = [
  { _id: 1, label: "Home", to: "/" },
  { _id: 2, label: "Shop", to: "/shop" },
  { _id: 4, label: "Women", to: "/category/women", megaMenu: true },
  { _id: 5, label: "Men", to: "/category/men" },
  { _id: 6, label: "Sports", to: "/category/sports" },
];

const MainMenu = ({ categories, subcategories }) => {
  // Context
  const [cart, setCart] = useCart();

  // state
  const [show, setShow] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubcategoryCollapse, setActiveSubcategoryCollapse] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleMenuClose = () => setShow(false);
  const handleMenuShow = () => setShow(true);
  const handleSubmenuActive = (id) => {
    if (activeSubmenu === id) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(id);
    }
  };

  const handleSubcategoryCollapse = (categoryId) => {
    setActiveSubcategoryCollapse(activeSubcategoryCollapse === categoryId ? null : categoryId);
  };

  const filteredSubcategories = (categoryId) =>
    subcategories.filter((subcategory) => subcategory?.category?._id === categoryId);

  useEffect(() => {
    const totalAmount = parseFloat(cart.reduce((total, product) => total + product?.price, 0));
    setTotalPrice(totalAmount);
  }, [cart]);

  return (
    <>
      <Offcanvas show={show} onHide={handleMenuClose} responsive="lg">
        <Offcanvas.Header
          className="px-4 pt-4 justify-content-end"
          closeButton
        ></Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <div className="d-flex gap-4 mb-4 px-4">
            <button
              onClick={() => setShowCategories(!showCategories)}
              style={{ padding: "7px" }}
              className={`btn ${
                showCategories ? "btnPrimaryOutline" : "btnPrimary"
              } w-50 d-flex justify-content-center align-items-center gap-3 fw-medium`}
            >
              <FaSitemap className="flex-shrink-0" size={18} />
              <span className="text-uppercase">Menu</span>
            </button>
            <button
              onClick={() => setShowCategories(!showCategories)}
              style={{ padding: "7px" }}
              className={`btn ${
                showCategories ? "btnPrimary" : "btnPrimaryOutline"
              } w-50 d-flex justify-content-center align-items-center gap-3 fw-medium`}
            >
              <BiCategory className="flex-shrink-0" size={18} />
              <span className="text-uppercase">Categories</span>
            </button>
          </div>
          <hr />
          <div className="px-4 mt-4">
            {showCategories ? (
              <ul className="text-capitalize">
                {categories.map((category) => (
                  <li className="py-12" key={category?._id}>
                    {filteredSubcategories(category?._id).length > 0 ? (
                      <>
                        <NavLink
                          className="d-block hoverableOp d-flex justify-content-between align-items-center blackColor"
                          to="#"
                          onClick={() => handleSubcategoryCollapse(category?._id)}
                          aria-expanded={activeSubcategoryCollapse === category?._id}
                        >
                          <span className="d-flex align-items-center">
                            {category?.icon ? (
                              <img
                                className="me-3"
                                style={{ width: "1.6rem" }}
                                src={category.icon}
                                alt=""
                              />
                            ) : (
                              <CategoryIcon style={{ width: "2.1rem" }} className="me-2" />
                            )}

                            {category?.name}
                          </span>
                          {activeSubcategoryCollapse === category?._id ? (
                            <BiChevronDown size={22} />
                          ) : (
                            <BiChevronRight size={22} />
                          )}
                        </NavLink>

                        <Collapse in={activeSubcategoryCollapse === category?._id}>
                          <div>
                            <ul className="pt-2 ps-20">
                              {filteredSubcategories(category?._id).map((subcategory) => (
                                <li key={subcategory?._id}>
                                  <NavLink
                                    className="d-block hoverableOp px-4 py-2"
                                    to={`/category/subcategory/${subcategory?.slug}`}
                                  >
                                    {subcategory.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Collapse>
                      </>
                    ) : (
                      <NavLink
                        className="d-block hoverableOp d-flex justify-content-between align-items-center blackColor"
                        to={`/category/${category?.slug}`}
                      >
                        <span className="d-flex align-items-center">
                          {category?.icon ? (
                            <img
                              className="me-3"
                              style={{ width: "1.6rem" }}
                              src={category.icon}
                              alt=""
                            />
                          ) : (
                            <CategoryIcon style={{ width: "2.1rem" }} className="me-2" />
                          )}

                          {category?.name}
                        </span>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="fs-3">
                {mainMenuItems.map((item) => (
                  <li className="py-3" key={item?._id}>
                    {item?.megaMenu ? (
                      <>
                        <Link
                          onClick={() => handleSubmenuActive(item?._id)}
                          className="nav-link d-flex justify-content-between align-items-center"
                          to="#"
                          aria-current="page"
                        >
                          {item?.label}
                          {item?.megaMenu && <BsChevronRight size={18} />}
                        </Link>

                        <Collapse in={activeSubmenu === item?._id}>
                          <div className="p-3">
                            <h4>Subcategory</h4>
                            <h4>Subcategory</h4>
                            <h4>Subcategory</h4>
                          </div>
                        </Collapse>
                      </>
                    ) : (
                      <NavLink
                        onClick={() => handleSubmenuActive(item?._id)}
                        className="nav-link d-flex justify-content-between align-items-center"
                        to={item.to}
                        aria-current="page"
                      >
                        {item?.label}
                        {item?.megaMenu && <BsChevronRight size={18} />}
                      </NavLink>
                    )}
                  </li>
                ))}
                <>
                  <li className="py-3">
                    <NavLink
                      className="nav-link d-flex justify-content-between align-items-center"
                      to="/blog"
                      aria-current="page"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="py-3">
                    <NavLink
                      className="nav-link d-flex justify-content-between align-items-center"
                      to="/featured-products"
                      aria-current="page"
                    >
                      Featured Products
                    </NavLink>
                  </li>
                  <li className="py-3">
                    <NavLink
                      className="nav-link d-flex justify-content-between align-items-center"
                      to="/wishlist"
                      aria-current="page"
                    >
                      Wishlist
                    </NavLink>
                  </li>
                </>
              </ul>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

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
          <span onClick={handleMenuShow} className="hoverableOp d-lg-none" role="button">
            <HiOutlineBars3BottomRight size={32} className="themeColorSecondaryDark" />
          </span>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-lg-4">
              {mainMenuItems.map((item, index) => (
                <li
                  className={`nav-item text-center${item?.megaMenu ? " megaMenuLink" : ""}`}
                  key={index}
                >
                  <NavLink className="nav-link" to={item.to} aria-current="page">
                    {item?.label}
                    {item?.megaMenu && <BiChevronRight size={20} />}
                  </NavLink>
                  {item?.megaMenu && <MegaMenu />}
                </li>
              ))}
            </Nav>

            <div className="menuIcons d-flex justify-content-center align-items-center mt-2 mt-lg-0">
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
