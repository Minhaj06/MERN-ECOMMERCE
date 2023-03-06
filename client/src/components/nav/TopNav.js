import { NavLink } from "react-router-dom";
// import { Form, Select } from "antd";
import Form from "react-bootstrap/Form";

const TopNav = () => {
  return (
    <div>
      <div className="container py-3 text-capitalize">
        <div className="d-flex justify-content-between align-items-center fs-14 themeColorSecondaryDark">
          <div className="topNavLeft">
            <ul>
              <li className="nav-item d-inline-block me-20">
                <NavLink className="nav-link themeColorSecondaryDark" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item d-inline-block me-20">
                <NavLink className="nav-link themeColorSecondaryDark" to="/featured-products">
                  Featured Products
                </NavLink>
              </li>
              <li className="nav-item d-inline-block me-20">
                <NavLink className="nav-link themeColorSecondaryDark" to="/wishlist">
                  Wishlist
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="topNavRight">
            <ul>
              <li className="nav-item d-inline-block ms-20">
                <NavLink className="nav-link themeColorSecondaryDark" to="/signup">
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item d-inline-block ms-20">
                <NavLink className="nav-link themeColorSecondaryDark" to="/my-account">
                  My account
                </NavLink>
              </li>
              <li className="nav-item d-inline-block ms-20">
                <NavLink className="nav-link themeColorSecondaryDark" to="/order-tracking">
                  Order tracking
                </NavLink>
              </li>
              <li className="nav-item d-inline-block ms-20">
                <Form.Select
                  aria-label="Default select example"
                  className="fs-14 themeColorSecondaryDark"
                >
                  <option value="bdt" selected>
                    BDT
                  </option>
                  <option value="usd">USD</option>
                  <option value="sa">SA</option>
                </Form.Select>
              </li>
              <li className="nav-item d-inline-block ms-20">
                <Form.Select
                  aria-label="Default select example"
                  className="fs-14 themeColorSecondaryDark"
                >
                  <option value="english" selected>
                    English
                  </option>
                  <option value="japanese">Japanese</option>
                  <option value="arabic">Arabic</option>
                </Form.Select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
