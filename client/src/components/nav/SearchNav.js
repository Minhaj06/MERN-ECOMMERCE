import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";
import CategoryMenu from "../categoryMenu/CategoryMenu";

const SearchNav = () => {
  // hooks
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const queryParams = {};
      if (values.keyword) {
        queryParams.keyword = values.keyword;
      }
      if (values.category && values.category !== "null") {
        queryParams.category = values.category;
      }

      const queryString = new URLSearchParams(queryParams).toString();

      navigate(`/search?${queryString}`);
    } catch (err) {
      console.log(err);
    }
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get(`/categories`);
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bgThemeSecondaryDark pt-20 text-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end align-items-end position-relative">
              <CategoryMenu />

              <div className="searchBox mb-20">
                <form onSubmit={handleSearch}>
                  <div className="input-group">
                    <select
                      className="form-select ps-3 fw-medium border-0 shadow-none border-end border-secondary"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          category: e.target.value === "null" ? "" : e.target.value,
                        })
                      }
                      value={values.category || ""}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option value={category?._id} key={category?._id}>
                          {category?.name}
                        </option>
                      ))}
                    </select>
                    <input
                      style={{ width: "30rem", maxWidth: "30rem" }}
                      type="search"
                      className="form-control border-0 border-start border-secondary shadow-none ps-4"
                      placeholder="Search..."
                      onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                      value={values.keyword || ""}
                    />
                    <button
                      type="submit"
                      className="btn btnPrimary input-group-text fs-14 px-4 py-3"
                    >
                      <BsSearch size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
