import React, { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { BiCategory, BiChevronRight, BiChevronUpSquare } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    loadCategories();
    loadSubcategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get(`/categories`);

      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadSubcategories = async (categoryId) => {
    try {
      // const { data } = await axios.get(`/subcategories-by-categoryId/${categoryId}`);
      const { data } = await axios.get(`/subcategories`);

      setSubcategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredSubcategories = (categoryId) =>
    subcategories.filter((subcategory) => subcategory?.category?._id === categoryId);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div
      className="categoryMenu allDepartments position-absolute top-0 start-0"
      style={{ width: "30rem" }}
    >
      <div className="catMenuHeader bgTheme px-4 py-3 rounded-top-3 d-flex justify-content-between align-items-center">
        <div>
          <h4 className="fs-16 fw-medium">All Departments</h4>
          <p className="fs-13 mb-0">Total 1022 Products</p>
        </div>
        <div>
          <HiOutlineBars3BottomRight size={28} type="button" />
        </div>
      </div>

      <div className="catMenuBody">
        <ul class="list-group catMenuList rounded-0">
          {categories.map((category) => (
            <li class="list-group-item px-4 py-12" key={category._id}>
              <NavLink
                className="d-block hoverableOp d-flex justify-content-between align-items-center blackColor"
                to="#"
                onClick={() => setOpen1(!open1)}
                aria-expanded={open1}
              >
                <span className="d-flex align-items-center">
                  <img
                    className="me-3"
                    style={{ width: "1.4rem" }}
                    src={category.icon}
                    alt=""
                  />
                  {category.name}
                </span>
                <BiChevronRight size={20} />
              </NavLink>

              <Collapse in={open1}>
                <div>
                  <ul className="pt-2">
                    {filteredSubcategories(category._id).map((subcategory) => (
                      <li>
                        <NavLink className="d-block px-4 py-2" to="/subcategory">
                          <span className="me-2">
                            <BiCategory size={16} />
                          </span>
                          {subcategory.name}
                          <span className="ms-1">
                            <BiChevronUpSquare size={16} />
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
