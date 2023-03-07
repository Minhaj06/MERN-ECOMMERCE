import React from "react";
import { BsSearch } from "react-icons/bs";

export const SearchNav = () => {
  return (
    <div className="bgThemeSecondaryDark py-4 text-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="categoryMenu"></div>

              <div className="searchBox">
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
                  <button class="btn btnPrimary input-group-text fs-14 px-4 py-3">
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
