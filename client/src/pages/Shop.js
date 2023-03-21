import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/cards/productCard/ProductCard";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { ReactComponent as CategoryIcon } from "../assets/icons/categoryIcon.svg";

import { Button, Collapse } from "react-bootstrap";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCategories();
    loadSubcategories();
    loadProducts();
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

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`products`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  // List View Grid View Products
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const [open, setOpen] = useState([]);

  const handleToggle = (id) => {
    if (open.includes(id)) {
      setOpen((prevState) => prevState.filter((x) => x !== id));
    } else {
      setOpen((prevState) => [...prevState, id]);
    }
  };

  // Products sort
  // Sort by date
  //   const sortByDateOldToNew = () => {
  //     const sortedProducts = [...products].sort(
  //       (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  //     );
  //     console.log(products);
  //     console.log([...products]);
  //     setProducts(sortedProducts);
  //   };
  const sortByAlphabatically = () => {
    const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedProducts);
  };

  const sortProducts = (event) => {
    const value = event.target.value;
    if (value === "dateNewToOld") {
      const sortedProducts = [...products].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setProducts(sortedProducts);
    } else if (value === "dateOldToNew") {
      const sortedProducts = [...products].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setProducts(sortedProducts);
    } else if (value === "featured") {
      const sortedProducts = [...products].sort((a, b) => b.isFeatured - a.isFeatured);
      setProducts(sortedProducts);
      console.log(sortedProducts.map((item) => item.isFeatured));
    } else if (value === "bestSelling") {
      const sortedProducts = [...products].sort((a, b) => b.sold - a.sold);
      setProducts(sortedProducts);
    } else if (value === "priceLowToHight") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (value === "priceHighToLow") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    } else if (value === "alphabetically_A_Z") {
      const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sortedProducts);
    } else if (value === "alphabetically_Z_A") {
      const sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
      setProducts(sortedProducts);
    }
  };
  return (
    <div className="my-50">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            <div className="bgLight2 rounded py-4 border">
              <h2 className="px-4 mb-4">Shop By</h2>

              <ul class="list-group bg-transparent catMenuList rounded-0 text-capitalize">
                {categories.map((category) => (
                  <li
                    class="list-group-item bg-transparent px-4 py-12 border-start-0 border-end-0"
                    key={category?._id}
                  >
                    {filteredSubcategories(category?._id).length > 0 ? (
                      <>
                        <div className="d-flex align-items-center gap-3">
                          <Form.Check
                            type="checkbox"
                            id={`catId${category?._id}`}
                            key={category?._id}
                          />
                          <div
                            role="button"
                            className="d-flex justify-content-between align-items-center w-100"
                            onClick={() => handleToggle(`catId${category?._id}`)}
                            aria-expanded={open.includes(`catId${category?._id}`)}
                          >
                            <span className="d-flex align-items-center">
                              {category?.icon ? (
                                <img
                                  className="me-3"
                                  style={{ width: "1.2rem" }}
                                  src={category.icon}
                                  alt=""
                                />
                              ) : (
                                <CategoryIcon style={{ width: "1.7rem" }} className="me-2" />
                              )}

                              {category?.name}
                            </span>
                            {open.includes(`catId${category?._id}`) ? (
                              <AiOutlineMinus className="themeColor" />
                            ) : (
                              <AiOutlinePlus className="themeColor" />
                            )}
                          </div>
                        </div>
                        <Collapse in={open.includes(`catId${category?._id}`)}>
                          <div id="collapse1">
                            <ul className="pt-2 ps-5">
                              {filteredSubcategories(category?._id).map((subcategory) => (
                                <li
                                  className="py-2 d-flex align-items-center gap-3"
                                  key={subcategory?._id}
                                >
                                  <Form.Check type="checkbox" key={subcategory?._id} />
                                  <span>{subcategory.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Collapse>
                      </>
                    ) : (
                      <div className="d-flex align-items-center gap-3">
                        <Form.Check type="checkbox" id={`catId${category?._id}`} />
                        <div
                          role="button"
                          className="d-flex justify-content-between align-items-center w-100"
                        >
                          <span className="d-flex align-items-center">
                            {category?.icon ? (
                              <img
                                className="me-3"
                                style={{ width: "1.2rem" }}
                                src={category.icon}
                                alt=""
                              />
                            ) : (
                              <CategoryIcon style={{ width: "1.7rem" }} className="me-2" />
                            )}

                            {category?.name}
                          </span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row g-4 gy-5">
              <div className="col-12">
                <div className="bgLight2 p-4 rounded border">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span
                        type="button"
                        className="fs-3 hoverableOp d-flex align-items-center gap-3"
                        onClick={() => toggleView()}
                      >
                        {isGridView ? (
                          <>
                            <FaBars size={20} /> List View
                          </>
                        ) : (
                          <>
                            <RiLayoutGridFill size={20} /> Grid View
                          </>
                        )}
                      </span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <span className="text-nowrap">Sort by</span>
                      <Form.Select className="fs-4" onChange={sortProducts}>
                        <option value="dateNewToOld">Date, new to old</option>
                        <option value="dateOldToNew">Date, old to new</option>
                        <option value="featured">Featured</option>
                        <option value="bestSelling">Best selling</option>
                        <option value="priceLowToHight">Price, low to hight</option>
                        <option value="priceHighToLow">Price, hight to low</option>
                        <option value="alphabetically_A_Z">Alphabetically, A-Z</option>
                        <option value="alphabetically_Z_A">Alphabetically, Z-A</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>

              {isGridView
                ? products?.map((product) => (
                    <div className="col-sm-6 col-md-4" key={product?._id}>
                      <ProductCard product={product} />
                    </div>
                  ))
                : products?.map((product) => (
                    <div className="col-12" key={product?._id}>
                      <ProductCard product={product} isTrending={true} listView={true} />
                    </div>
                  ))}
              {/* {products?.map((product) => (
                <div className="col-sm-6 col-md-4" key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
