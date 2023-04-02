import React from "react";
import { BsSearch } from "react-icons/bs";
import CategoryMenu from "../CategoryMenu";

const SearchNav = () => {
  return (
    <div className="bgThemeSecondaryDark pt-20 text-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end align-items-end position-relative">
              <CategoryMenu />

              <div className="searchBox mb-20">
                <div className="input-group">
                  <span className="input-group-text bg-white border-0 px-4">
                    <BsSearch size={15} />
                  </span>
                  <input
                    style={{ width: "35rem", maxWidth: "35rem" }}
                    type="search"
                    className="form-control border-0 shadow-none"
                    placeholder="Search for products"
                  />
                  <button className="btn btnPrimary input-group-text fs-14 px-4 py-3">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
