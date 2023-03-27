import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import MegaMenuWomen from "../megaMenu/MegaMuenuWomen";
// import { useAuth } from "../../context/auth";
// import { useNavigate } from "react-router-dom";

const Menu = () => {
  // hooks
  // const [auth, setAuth] = useAuth();
  // const navigate = useNavigate();

  // const logout = () => {
  //   setAuth({ ...auth, user: null, token: "" });
  //   localStorage.removeItem("auth");
  //   navigate("/login");
  // };

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
          <Nav className="me-auto gap-4">
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

            <li className="nav-item ms-0 megaMenuLink">
              <NavLink className="nav-link" to="category/women">
                Women
                <FiChevronDown size={20} />
              </NavLink>
              {/* mega menu */}
              <MegaMenuWomen />
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
                  <AiOutlineHeart size={22} />
                  <span className="floating-num">0</span>
                </div>
              </NavLink>
            </div>
            <div className="topbar-icon-group me-20">
              <NavLink className="text-color-dark" to="/cart">
                <div className="floating-text-icon d-inline-block position-relative">
                  <AiOutlineShoppingCart size={22} />
                  <span className="floating-num">
                    {JSON.parse(localStorage.getItem("cart")).length}
                  </span>
                </div>
              </NavLink>
            </div>
            <div className="totalAmount">
              <small className="fs-12 lightColor">Total</small>
              <h5 className="fs-14">$0.00</h5>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
