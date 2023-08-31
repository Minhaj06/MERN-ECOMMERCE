import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bgDark py-5">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img src={"logo"} alt="Logo" className="logo" />
            <h4 className="fontPoppins themeColor mb-4">Shop</h4>
            <ul className="list-unstyled">{/* ... */}</ul>
          </Col>

          <Col md={4} className="text-center">
            <h4 className="fontPoppins themeColor mb-4">Customer Service</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="whiteColor text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="whiteColor text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="whiteColor text-decoration-none">
                  Returns
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h4 className="fontPoppins themeColor mb-4">Follow Us</h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#" className="whiteColor">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="whiteColor">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="whiteColor">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="whiteColor mb-0">
              &copy; 2023 Your E-Commerce Store. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
