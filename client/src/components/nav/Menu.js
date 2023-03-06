import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./megaMenu.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

import megaMenuWomen from "../../assets/images/megaMenuWomen.jpg";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Navbar className="mb-4 bg-transparent" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="me-5">
          <NavLink to="/">
            <img
              src="https://minhaj06.github.io/AlifaOnline-OkkhoTech/images/logo.svg"
              alt="Logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4 fs-15">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>

            <li className="nav-item ms-0">
              <NavLink className="nav-link" to="category/women">
                Women
                <FiChevronDown size={20} />
              </NavLink>
              {/* mega menu */}
              <div className="megaMenu">
                <div className="container">
                  <div className="row g-5">
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="">
                            <h5 className="text-uppercase fw-semibold text-color-2 mb-4">
                              Women clothing
                            </h5>

                            <ul className="text-capitalize">
                              <li className="mb-4">
                                <NavLink to="">Dresses</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Coats & Jackets</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Tops & Tess</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Dresses</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Coats & Jackets</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Tops & Tess</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Dresses</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Tops & Tess</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Dresses</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="">
                            <h5 className="text-uppercase fw-semibold text-color-2 mb-4">
                              Jwelery
                            </h5>

                            <ul className="text-capitalize">
                              <li className="mb-4">
                                <NavLink to="">Accessories</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Bags & purses</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Rings</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Earrings</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Accessories</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Bags & purses</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="">
                            <h5 className="text-uppercase fw-semibold text-color-2 mb-4">
                              Beauty
                            </h5>

                            <ul className="text-capitalize">
                              <li className="mb-4">
                                <NavLink to="">Bath accessories</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Makeup & cosmetics</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Skin care</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Hair care</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Essential oils</NavLink>
                              </li>
                              <li className="mb-4">
                                <NavLink to="">Facemask & coverrings</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="">
                            <h5 className="text-uppercase fw-semibold text-color-2 mb-4">
                              Top brands
                            </h5>

                            <ul className="text-capitalize">
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Nike</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Louis vuitton</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Hermes</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Gucci</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Zalando</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Tiffany & Co.</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Nike</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Louis vuitton</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Hermes</NavLink>
                              </li>
                              <li className="float-start w-50 mb-4">
                                <NavLink to="">Gucci</NavLink>
                              </li>
                            </ul>
                            <NavLink
                              className="d-inline-block fw-semibold py-2 hoverable"
                              to="/brands"
                            >
                              <span className="me-3">View all brands</span>
                              <BsArrowRightShort size={22} />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="overflow-hidden">
                        <a href="#" className="d-block">
                          <img className="w-100 megaMenuImg mb-4" src={megaMenuWomen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="category/men">
                Men
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="category/sports">
                Sports
              </NavLink>
            </li>
          </Nav>

          <div className="menuIcons d-flex align-items-center">
            <div className="topbar-icon-group me-20">
              <NavLink className="text-color-dark" to="/wishlist">
                <div className="floating-text-icon d-inline-block position-relative">
                  <AiOutlineHeart className="fs-3" />
                  <span className="floating-num">0</span>
                </div>
              </NavLink>
            </div>
            <div className="topbar-icon-group me-20">
              <NavLink className="text-color-dark" to="/cart">
                <div className="floating-text-icon d-inline-block position-relative">
                  <AiOutlineShoppingCart className="fs-3" />
                  <span className="floating-num">0</span>
                </div>
              </NavLink>
            </div>
            <div className="totalAmount">
              <small className="fs-12 lightColor">Total</small>
              <h5>$0.00</h5>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
