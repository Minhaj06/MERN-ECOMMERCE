import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function TestMenu() {
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="container mt-5 bg-dark">
      <ul className="nav d-flex justify-content-between shadow mb-4">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" aria-current="page">
            Home
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
            <li className="nav-item ">
              <NavLink className="nav-link" to="dashboard/secret">
                Secret
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <div className="dropdown">
            <li className="nav-item ">
              <NavLink
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                {auth?.user.name}
              </NavLink>

              <ul className="dropdown-menu">
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink onClick={logout} className="nav-link" type="button">
                    Logout
                  </NavLink>
                </li>
                ;
              </ul>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default TestMenu;
